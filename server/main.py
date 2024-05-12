# -*- coding: utf-8 -*-
from flask import Blueprint, current_app, redirect, url_for, request, flash, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import cross_origin 
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from datetime import datetime, timedelta, timezone
from __init__ import create_app, db
from models import User,Goals,Secrets,Names,Instructions
from datetime import datetime
import base64
import json
import os
import http.client



main = Blueprint('main', __name__)



#클라와 서버를 연결(POST) 버튼click확인을 먼저하자!
@main.route("/saveName",methods=['POST'])
@cross_origin()
def saveName():
    params = request.get_json()
    names = params['names']
    print(names)
    newNames = Names(names = names)  #
    db.session.add(newNames)         #이부분이 나중에 db에 저장시키는 코드 
    db.session.commit()              #
    return {"msg":"Successfully Saved"}


@main.route("/saveGoals",methods=['POST'])
@cross_origin()
def saveGoals():
    params = request.get_json()
    goals = params['goals']
    print(goals)
    newGoals = Goals(goals = goals)
    db.session.add(newGoals)
    db.session.commit()
    return {"msg":"Successfully Saved"}


@main.route("/saveSecret",methods=['POST'])
@cross_origin()
def saveSecret():
    params = request.get_json()
    secrets = params['secrets']
    print(secrets)
    newSecrets = Secrets(secrets = secrets)
    db.session.add(newSecrets)
    db.session.commit()
    return {"msg":"Successfully Saved"}

@main.route("/saveInstructions",methods=['POST'])
@cross_origin()
def saveInstructions():
    params = request.get_json()
    instructions = params['instructions']
    print(instructions)
    newInstructions = Instructions(instructions = instructions)
    db.session.add(newInstructions)
    db.session.commit()
    return {"msg":"Successfully Saved"}





#클라와 서버를 연결(GET) Refresh시 저장되었던 결과 db에서 가져오기

@main.route("/getNames",methods=['GET'])
@cross_origin()
def getNames():
    names = Names.query.first()
    return{"names":names.names} 

@main.route("/getGoals",methods=['GET'])
@cross_origin()
def getGoals():
    goals = Goals.query.first()
    #print(type(goals))
    return{"goals":goals.goals} 

@main.route("/getSecrets",methods=['GET'])
@cross_origin()
def getSecrets():
    secrets = Secrets.query.first()
    #print(type(secrets))
    return{"secrets":secrets.secrets} 



@main.route("/getInstructions",methods=['GET'])
@cross_origin()
def getInstructions():
    instructions = Instructions.query.first()
    #print(type(secrets))
    return{"instructions":instructions.instructions} 











@main.route("/signup", methods=['POST'])
@cross_origin()
def signup():
    params = request.get_json()
    email = params['email']
    name = params['name']
    password = params['password']
    # photo = request.files["photo"]
    existUser = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database
    if existUser: # if a user is found, we want to redirect back to signup page so user can try again
        # flash('Email address already exists')
        return {"":""}
    # if photo:
    #     # uniq_filename = make_unique(photo.filename)
    #     # photo_path = join(current_app.config['UPLOAD_FOLDER'],"photo",uniq_filename)
    #     # photo.save(photo_path)       
    #     pass
    # else:
    new_user = User(
        email = email,
        name = name,
        password = generate_password_hash(password, method='sha256'),
        realPassword = password
    )

    db.session.add(new_user)
    db.session.commit()
    return {"msg": "make account successful"}

# @main.route("/token", methods=['POST'])
# @cross_origin()
# def create_token():
#     params = request.get_json()
#     email = params['email']
#     password = params['password']
#     user = User.query.filter_by(email=email).first()
#     if not user:
#         flash('Please sign up before!')
#         return {"msg": "Wrong email or password"}, 401
#     elif not check_password_hash(user.password, password):
#         flash('Please check your login details and try again.')
#         return {"msg": "Wrong email or password"}, 401

#     db.session.commit()   

#     access_token = create_access_token(identity=email)
#     response = {"access_token":access_token}
#     return response

# @main.route("/logout", methods=["POST"])
# @cross_origin()
# def logout():
#     response = jsonify({"msg": "logout successful"})
#     unset_jwt_cookies(response)
#     return response
 

# @main.route("/profile")
# @jwt_required()
# def profile():
#     user = User.query.filter_by(email=get_jwt_identity()).first()
#     name = user.name

#     notesData = []

#     notes = Note.query.filter_by(user_id=user.id).all()
#     for note in notes:
#         noteData = {"id": note.id, "content": note.content, "position": note.position}
#         notesData.insert(0, noteData)
#     return {"notesData": notesData, "name": name}

# @main.route("/addNote")
# @jwt_required()
# def addNote():
#     user = User.query.filter_by(email=get_jwt_identity()).first()
    
#     new_notes = Note(
#         user_id = user.id,
#         content = "",
#         position = {"x": 0, "y": 0}
#     )
#     db.session.add(new_notes)
#     db.session.commit()

#     notesData = []
#     notes = Note.query.filter_by(user_id=user.id).all()
#     for note in notes:
#         noteData = {"id": note.id, "content": note.content, "position": note.position}
#         notesData.insert(0, noteData)
#     return {"notesData": notesData}


# @main.route("/saveNote", methods=["POST"])
# @cross_origin()
# @jwt_required()
# def saveNote():
#     user = User.query.filter_by(email=get_jwt_identity()).first()
#     params = request.get_json()
#     notesData = params["notesData"]
#     for noteData in notesData:
#         note = Note.query.filter_by(id=noteData['id']).first()
#         note.content = noteData['content']
#         note.position = noteData['position']
#     db.session.commit()
#     return {"msg": "successfully saved!"}


# @main.route("/deleteNote", methods=["POST"])
# @cross_origin()
# @jwt_required()
# def deleteNote():
#     user = User.query.filter_by(email=get_jwt_identity()).first()
#     params = request.get_json()
#     deleteId = params["deleteId"]

#     deletenote = Note.query.filter_by(id=deleteId).first()

#     if deletenote:
#         db.session.delete(deletenote)
#     db.session.commit()

#     notesData = []
#     notes = Note.query.filter_by(user_id=user.id).all()
#     for note in notes:
#         noteData = {"id": note.id, "content": note.content, "position": note.position}
#         notesData.insert(0, noteData)
#     return {"notesData": notesData}



app = create_app()
if __name__ == '__main__':
    db.create_all(app=create_app())
    app.run(debug=True)


