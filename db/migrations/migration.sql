\c todo_dev;
DROP TABLE IF EXISTS todo_names;
CREATE TABLE IF NOT EXISTS todo_names (
  id SERIAL PRIMARY KEY,
  title TEXT,
  category VARCHAR(255),
  status TEXT
);
