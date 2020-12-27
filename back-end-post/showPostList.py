from flask import Response, jsonify
from app import mysql

def service():
  cur = mysql.connect().cursor()
  cur.execute("SELECT * FROM post")
  r = [dict((cur.description[i][0], value)
      for i, value in enumerate(row)) for row in cur.fetchall()]
  print(r)
  return jsonify(r)