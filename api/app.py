from quart import Quart, jsonify, make_response, request
from quart_cors import cors, route_cors
from asyncpg import create_pool
import asyncio
import os
import datetime

GET_RANDOM_MESSAGE_SET = "SELECT messages FROM messages WHERE public=$1 ORDER BY RANDOM() LIMIT $2;"

launch_date = datetime.datetime(int(os.environ["LAUNCH_YEAR"]), 
    int(os.environ["LAUNCH_MONTH"]), 
    int(os.environ["LAUNCH_DAY"]),
    int(os.environ["LAUNCH_HOUR"]),
    int(os.environ["LAUNCH_MINUTE"]))

# Database setup
async def create_db_pool():
    """
    Creates a connection pool to the database.
    """
    return await create_pool(dsn=os.environ["DATABASE_URL"], min_size=5, max_size=13)

# App setup
app = Quart(__name__)

@app.before_serving
async def startup():
    global pool
    pool = await create_db_pool()

@app.route('/messages/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin=os.environ["FRONTEND_ADDR"], allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_messages():
    if request.method == 'OPTIONS':
        return {}, 204
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

@app.route('/message/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin=os.environ["FRONTEND_ADDR"], allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_message():
    if request.method == 'OPTIONS':
        return {}, 204
    async with pool.acquire() as connection:
        recs = await connection.fetch(GET_RANDOM_MESSAGE_SET, 1, 1)
        message = ""
        for rec in recs:
            message = rec["messages"]["message"]
    return jsonify({
        "message": message,
        "status": 200,
        "msg": "Messages retrieved successfully."
    }), 200

@app.route('/connections-2024-available/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin="*", allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_connections_available():
    if (datetime.datetime.now() < launch_date):
      return 404
    if request.method == 'OPTIONS':
        return {}, 204
    # return a file from the static directory
    return jsonify({
        "available": True,
        "status": 200,
    }), 200

@app.route('/connections-2024/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin="*", allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_connections():
    if (datetime.datetime.now() < launch_date):
      return 404
    if request.method == 'OPTIONS':
        return {}, 204
    # return a file from the static directory
    return await app.send_static_file('Connections Messages of Hope.mp4')

@app.route('/connections-2024-subtitled-and-signed/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin="*", allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_connections_subtitled_and_signed():
    if (datetime.datetime.now() < launch_date):
      return 404
    if request.method == 'OPTIONS':
        return {}, 204
    # return a file from the static directory
    return await app.send_static_file('Connections Messages of Hope - Subtitled and Signed.mp4')

@app.route('/making-of-connections-2024/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin="*", allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_making_of_connections():
    if (datetime.datetime.now() < launch_date):
      return 404
    if request.method == 'OPTIONS':
        return {}, 204
    # return a file from the static directory
    return await app.send_static_file('The Making of Connections Messages of Hope.mp4')

@app.route('/making-of-connections-2024-subtitled-and-signed/', methods=['GET', 'OPTIONS'])
@route_cors(allow_origin="*", allow_headers=["Content-Type"], allow_methods=["GET", "OPTIONS"])
async def get_making_of_connections_subtitled_and_signed():
    if (datetime.datetime.now() < launch_date):
      return 404
    if request.method == 'OPTIONS':
        return {}, 204
    # return a file from the static directory
    return await app.send_static_file('The Making of Connections Messages of Hope - Subtitled and Signed.mp4')

# Development startup
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=os.environ["BACKEND_PORT"])