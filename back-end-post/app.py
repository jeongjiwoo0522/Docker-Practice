from flask import Flask
from flask_cors import CORS
from flaskext.mysql import MySQL

from production import *

app = Flask(__name__)
CORS(app)
mysql = MySQL()

app.config["MYSQL_DATABASE_USER"] = DATABASE_USER
app.config["MYSQL_DATABASE_PASSWORD"] = DATABASE_PASSWORD
app.config["MYSQL_DATABASE_DB"] = DATABASE_NAME
app.config["MYSQL_DATABASE_HOST"] = DATABASE_HOST

mysql.init_app(app)

@app.route("/")
def hellp_world():
  return "hello"

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)