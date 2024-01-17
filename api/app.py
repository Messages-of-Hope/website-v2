from flask import Flask
from flask_cors import CORS, cross_origin
import os

from messages.messages import messages_blueprint

app = Flask(__name__)
app.register_blueprint(messages_blueprint, url_prefix="/messages")

CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=os.environ["BACKEND_PORT"])