from app import app 

import showPostList, addPost, deletePost

# flask router decorater
# use 
# @app.route("/endpoint")
# function

@app.route("/")
def hellp_world():
  return "hello"

# flask add_url_rule api
# use add_url_rule(rule, endpoint=None, view_func=None, provide_automatic_options=None, **options)

app.add_url_rule("/post", "view", showPostList.service, methods=["GET"])
app.add_url_rule("/post", "add", addPost.service, methods=["POST"])
app.add_url_rule("/post", "delete", deletePost.service, methods=["DELETE"])

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)