from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='../build', static_url_path='/')

CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/members", methods=["POST"])
def members():
    print(jsonify(request.json).json)
    first_name = jsonify(request.json).json['body']
    print(first_name)
    if first_name == "Andrew":
        return jsonify("Whitaker")
    else:
        return jsonify("User Not Found")

if __name__ == "__main__":
    app.run(debug=True)