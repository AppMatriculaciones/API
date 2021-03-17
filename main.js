//Imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const jwt = require('jsonwebtoken');

//Creating a server instance
const app = express();

//Defining global variables
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://alec:alec@mflix.spncl.mongodb.net/project_online_enrollement?authSource=admin&replicaSet=atlas-5qhdga-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const DATABASE_NAME = "project_online_enrollement";
var database, collection;

//https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connection to mongodb cluster and getting database
mongoClient
    .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) =>{
        if(error) {
            console.log(console.error());
        }else{
            database = client.db(DATABASE_NAME);
            console.log("Connected to `" + DATABASE_NAME + "`!");
        }
    });
    
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})

//======== Endpoints ========

app.get("/",(request,response) => {
    response.json("Server works!");
});

//login student -> getStudent + generate token and save it
app.get("/login/student", (request, response) => {
    const {email, password} = request.body;
    database.collection('students').findOne({email: email, password: password}, (error, student) => {
        if(error){
            return response.status(500).json({error: error.message});
        }
        if(student == null){
            response.status(200).json({msg: "Authentification failed."})
        }else{
            const {_id, name} = student;
            const token = jwt.sign({ name: name }, email);
            
            database.collection('students').updateOne({
                "_id": new objectId(_id)
            }, {
                $set: {
                    token: token
                }
            });
            response.status(200).json(student);
        }
    });
});

//login admin -> getAdmin + generate token and save it
app.get("/login/admin", (request, response) => {
    const {email, password} = request.body;
    database.collection('admins').findOne({email: email, password: password}, (error, admin) => {
        if(error){
            return response.status(500).json({error: error.message});
        }
        if(admin == null){
            response.status(200).json({msg: "Authentification failed."})
        }else{
            const {_id, name} = admin;
            const token = jwt.sign({ name: name }, email);
            
            database.collection('admins').updateOne({
                "_id": new objectId(_id)
            }, {
                $set: {
                    token: token
                }
            });
            response.status(200).json(admin);
        }
    });
});