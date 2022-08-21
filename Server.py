from flask import Flask
from flask import request
import json
import csv
app = Flask(__name__)


@app.route('/api/register',methods=['GET','POST'])
def getdata():
    print(request.get_json(force=True))
    userinfo = request.get_json(force=True)
    with open('database.csv','a') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow([userinfo['name'],userinfo['gmail'],userinfo['password']])
    return '<h1>OK</h1>'
app.run()

