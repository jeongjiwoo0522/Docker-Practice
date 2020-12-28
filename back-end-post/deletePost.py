from flask import jsonify, request
from app import mysql

def service():
  try: 
    id = request.json["postId"]
    sqlQuery = "DELETE FROM post WHERE id = %s" % id 
    print(sqlQuery) 
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sqlQuery)
    conn.commit()
    response = jsonify({ "message": "delete successfully" }) # response message
    response.status_code = 200 # status code 
    return response
  finally:
    conn.close()
    cursor.close()