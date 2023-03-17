from sqlalchemy import create_engine
from sqlalchemy import text
from flask import Flask
import secrets
from flask_cors import CORS
import datetime
import pandas as pd
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

engine = create_engine("postgresql+psycopg2://viral_user:yuaDQ7PX0Yji9bCa8O2QBGD9TDFkAqW3@dpg-cg9q671mbg54mb8vbur0-a.frankfurt-postgres.render.com/viral")

@app.route('/register', methods=['POST'])
def register(**kwargs):
  with engine.connect() as e:
    id = secrets.token_hex(16)
    kwargs.update({'id':id})
    df = pd.DataFrame([kwargs])
    df.to_sql('users', schema="public", con=e, if_exists='append')
    return f'{df.to_json()} created!'

@app.route('/login', methods=['POST'])
def login(**kwargs):
    with engine.connect() as e:
    username = kwargs.get('username')
    password = kwargs.get('password')
    my_query = f"SELECT id FROM users WHERE username LIKE '{username}' AND password LIKE '{password}'"
    results = pd.DataFrame(e.execute(my_query).fetchall())
    return results.to_json()

@app.route('/create', methods=['POST'])
def create_append_collection(**kwargs):
  with engine.connect() as e:
    album_id = secrets.token_hex(16)
    kwargs.append('post_id',album_id)
    df = pd.DataFrame([kwargs])
    df.to_sql('collection', schema="public", con=e, if_exists='append')
    return f'{df.to_json()} created!'

@app.route('/read/all', methods=['GET'])
def read_all_collections(**kwargs):
  with engine.connect() as e:
    id = kwargs.get('id')
    my_query = f"SELECT * FROM collection WHERE authorized_ids LIKE %'{id}'%"
    results = pd.DataFrame(e.execute(my_query).fetchall())
    return results.to_json()

@app.route('/read/', methods=['GET'])
def read_collection(**kwargs):
  with engine.connect() as e:
    collection_id = kwargs.get('collection_id')
    my_query = f"SELECT * FROM collection WHERE collection_id LIKE '{collection_id}'"
    results = pd.DataFrame(e.execute(my_query).fetchall())
    return results.to_json()

      

if __name__ == "__main__":
    # port = int(os.getenv('VISION_EYE_PORT', 4001))
    app.run(debug=True, host='0.0.0.0', port=4001)






