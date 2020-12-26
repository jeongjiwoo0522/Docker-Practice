from flask import Flask
app = Flask(__name__)

from view import bp

app.register_blueprint(bp)

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)