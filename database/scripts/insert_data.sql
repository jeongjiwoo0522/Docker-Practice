INSERT INTO user 
  (aggent) 
  VALUES 
  ("bar");

INSERT INTO user 
  (aggent)
  VALUES
  ("foo");

INSERT INTO post 
  (post, aggent)
  VALUES 
  ("hello world", "bar");

INSERT INTO post 
  (post, aggent)
  VALUES 
  ("docker running", "foo");