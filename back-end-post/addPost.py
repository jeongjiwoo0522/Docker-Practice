from flask import Response, request
from app import mysql 

def service():
  post = request.json["post"]
  aggent = request.json["aggent"]
  print(post)
  print(aggent)
  return Response("ok")