from flask import jsonify, request
from app import mysql 

def service():
  try:
    post = request.json["post"]
    aggent = request.json["aggent"]
    print(post)
    print(aggent)
    sqlQuery = "INSERT INTO post (aggent, post) VALUES ('%s', '%s')" % (aggent, post)
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sqlQuery)
    conn.commit()
    response = jsonify({ "message": "Post added successfully" }) # response message 
    response.status_code = 201 # status code 
    return response
  finally:
    conn.close()
    cursor.close()