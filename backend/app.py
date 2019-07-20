import firebse_admin
from firebase_admin import firestore
import flask

app=flask.Flask(_name_)
firebase_admin.initialize_app()
cities = firestore.client().collection('cities')

@app.route()
