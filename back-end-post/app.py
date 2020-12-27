from flask import Flask
from flask_cors import CORS
from flaskext.mysql import MySQL

# database config 
from production import *

# flask app
app = Flask(__name__)
# app cors 
CORS(app)
# mysql orm 
mysql = MySQL()

# database name, host, password setting
app.config["MYSQL_DATABASE_USER"] = DATABASE_USER
app.config["MYSQL_DATABASE_PASSWORD"] = DATABASE_PASSWORD
app.config["MYSQL_DATABASE_DB"] = DATABASE_NAME
app.config["MYSQL_DATABASE_HOST"] = DATABASE_HOST

mysql.init_app(app)