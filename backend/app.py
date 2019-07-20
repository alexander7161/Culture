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
@app.route('/cities/<id>')
def read_city(id):
  return flask.jsonify(_ensure_city(id).to_dict())

@app.route('/cities/<id>',methods=['PUT'])
def update_city(id):
  _ensure_city(id):
    req=flask.request.json
    acities.document(id).set(req)
    return flask.jsonify({'success':True})

  @app.route('/cities/<id>',methods=['DELETE'])
  def delete_city(id):
    _ensure_city(id)
    acities.document(id).delete()
    return flask.jsonify({'success':True})
  def_ensure_city(id):
    try:
      return acities.document(id).get()
    except:
      flask.abort(404)
      
      if __name__=='__main__':
        app.run(host='127.0.0.1',port=8080, debug=True)
        
