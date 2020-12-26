from flask import Blueprint

bp = Blueprint("main", __name__, url_prefix="/")

@bp.route("/")
def hello_flask():
  return "앙"

@bp.route("/hello")
def hello_route():
  return "hello"