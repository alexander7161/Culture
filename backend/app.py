import firebse_admin
from firebase_admin import firestore
import flask

app=flask.Flask(_name_)
firebase_admin.initialize_app()
acities = firestore.client().collection('acities')

@app.route('/cities', methods=['POST'])
def create_cities():
  req = flask.request.json
  cities = acities.document()
  cities.set(req)
  return flask.jsonify({'id': cities.id}), 201
