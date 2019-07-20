import firebse_admin
from firebase_admin import firestore
import flask

app=flask.Flask(_name_)
firebase_admin.initialize_app()
acities = firestore.client().collection('acities')

@app.route('/cities', methods=['GET'])
def create_city():
  req = flask.request.json
  city = acities.document()
  city.set(req)
  return flask.jsonify({'id': city.id}), 201
