from flask import jsonify, request
from app import mysql 

def service():
  post = request.json["post"]
  aggent = request.json["aggent"]
  sqlQuery = "INSERT INTO post (aggent, post) VALUES ('%s', '%s')" % (aggent, post)
  conn = mysql.connect()
  cursor = conn.cursor()
  cursor.execute(sqlQuery)
  conn.commit()
  response = jsonify("Post added successfully")
  response.status_code = 201
  return response