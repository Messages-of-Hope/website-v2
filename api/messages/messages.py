from flask import Blueprint, Response, jsonify, request

messages_blueprint = Blueprint('messages', __name__)

# CORS
@messages_blueprint.after_request
def after_request(response: Response):
    """
    Adds headers to the response to allow CORS.
    """
    header = response.headers
    header['Access-Control-Allow-Origin'] = "*"
    return response

# Default request
@messages_blueprint.route('/', methods=['GET'])
def get_messages():
    return jsonify({'message': 'Hello, World!'})