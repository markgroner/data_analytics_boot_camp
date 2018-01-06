from flask import Flask, jsonify

app = Flask(__name__)

hello_dict = {"Hello": "World!"}

@app.route("/normal")
def normal():
    return hello_dict

@app.route("/jsonified")
def jsonified():
    return jsonify(hello_dict)

@app.route('/_get_current_user')
def get_current_user():
    return jsonify(username=g.user.username,
                   email=g.user.email,
                   id=g.user.id)

if __name__ == "__main__":
    app.run(debug=True)
