from quart import Quart, jsonify, make_response, request
from quart_cors import cors
from asyncpg import create_pool
import asyncio
import os
import smtplib
import datetime

GET_RANDOM_MESSAGE_SET = "SELECT messages FROM messages WHERE public=$1 ORDER BY RANDOM() LIMIT $2;"
INSERT_MESSAGE = "INSERT INTO messages (message, date, sourced, category, public) VALUES ($1, $2, $3, $4, $5);"

s = smtplib.SMTP('smtp.gmail.com', 587)
s.starttls()
s.login(os.environ["EMAIL_ADDR"], os.environ["EMAIL_PASSWORD"])

async def create_email_message(name, from_addr, organisation, subject, body):
    return f"""From: {name} <{from_addr}>
Org: {organisation}
Subject: {subject}

{body}
"""

# Database setup
async def create_db_pool():
    """
    Creates a connection pool to the database.
    """
    return await create_pool(dsn=os.environ["DATABASE_URL"], min_size=5, max_size=13)


# App setup
app = Quart(__name__)
app = cors(app, allow_origin=os.environ["FRONTEND_ADDR"], allow_headers=["Content-Type"], allow_methods=["GET", "POST", "OPTIONS"])

@app.before_serving
async def startup():
    global pool
    pool = await create_db_pool()


@app.route('/messages', methods=['GET'])
async def get_messages():
    async with pool.acquire() as connection:
        recs = await connection.fetch(GET_RANDOM_MESSAGE_SET, 1, 10)
        messages = []
        for rec in recs:
            messages.append(rec["messages"]["message"])
    return jsonify({
        "messages": messages,
        "status": 200,
        "msg": "Messages retrieved successfully."
    }), 200


@app.route('/message', methods=['GET'])
async def get_message():
    message = ""
    async with pool.acquire() as connection:
        recs = await connection.fetch(GET_RANDOM_MESSAGE_SET, 1, 1)
        for rec in recs:
            message = rec["messages"]["message"]
    return jsonify({
        "message": message,
        "status": 200,
        "msg": "Messages retrieved successfully."
    }), 200


@app.route('/email', methods=['POST'])
async def send_email():
    data = await request.get_json()
    name = data["name"]
    from_addr = data["email"]
    organisation = data["organisation"]
    subject = data["subject"]
    body = data["body"]
    msg = create_email_message(name, from_addr, organisation, subject, body)
    s.sendmail(os.environ["EMAIL_ADDR"], "contact@messagesofhope.co.uk", msg)
    return jsonify({
        "status": 200,
        "msg": "Email sent successfully."
    }), 200


@app.route('/message', methods=['POST'])
async def add_message():
    data = await request.get_json()
    message = data.get("message")
    date = datetime.datetime.today()
    async with pool.acquire() as connection:
        await connection.execute(INSERT_MESSAGE, message, date, 'website', 'uncategorised', 0)
    return jsonify({
        "status": 200,
        "msg": "Message added successfully."
    }), 200


# Development startup
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=os.environ["BACKEND_PORT"])