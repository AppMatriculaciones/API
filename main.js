//Imports
const express = require("express");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const jwt = require('jsonwebtoken');
const md5 = require('blueimp-md5');
const cors = require('cors');

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
//for corbdoba app can access
app.use(cors());

mongoClient
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        console.log("Connected to mongodb.");
        database = client.db(DATABASE_NAME);

        app.listen(PORT, () => {
            console.log(`Server started at http://localhost:${PORT}`)
        })
    })
    .catch((err) => console.log(err));

// ======== Endpoints ======== //

app.get("/", (request, response) => {
    response.json("Server works!");
});

// ========= Authentification ========== // 

//generating ajax request with body -> https://stackoverflow.com/questions/4159701/jquery-posting-valid-json-in-request-body
//login student con body-> getStudent + generate token and save it
app.get("/login/student", (request, response) => {
    const { email, password } = request.body;
    console.log(request.body);
    const hashedPassword = md5(password);
    database.collection('students').findOne({ email: email, password: hashedPassword }, (error, student) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (student == null) {
            response.status(200).json({ msg: "Authentification failed." })
        } else {
            const { _id, name } = student;
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

//login student -> getStudent + generate token and save it solo /login/student para params con metodo postman
app.get("/login/student/:email/:password", (request, response) => {
    const email = request.params.email;
    const password = request.params.password;
    const hashedPassword = md5(password);
    database.collection('students').findOne({ email: email, password: hashedPassword }, (error, student) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (student == null) {
            response.status(200).json({ msg: "Authentification failed." })
        } else {
            const { _id, name } = student;
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

//login admin with body -> getAdmin + generate token and save it
app.get("/login/admin", (request, response) => {
    const { email, password } = request.body;
    const hashedPassword = md5(password);
    database.collection('admins').findOne({ email: email, password: hashedPassword }, (error, admin) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (admin == null) {
            response.status(200).json({ msg: "Authentification failed." })
        } else {
            const { _id, name } = admin;
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

//login admin -> getAdmin + generate token and save it
app.get("/login/admin/:email/:password", (request, response) => {
    const email = request.params.email;
    const password = request.params.password;
    const hashedPassword = md5(password);
    database.collection('admins').findOne({ email: email, password: hashedPassword }, (error, admin) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (admin == null) {
            response.status(200).json({ msg: "Authentification failed." })
        } else {
            const { _id, name } = admin;
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

//=========== Crud careers ===========//

app.post("/career/create", (request, response) => {

    const newCareer = request.body;
    let date_start = newCareer.date_start;
    if (date_start != null) {
        newCareer.date_start = new Date(date_start);
    }
    let date_end = newCareer.date_end;
    if (date_end != null) {
        newCareer.date_end = new Date(date_end);
    }

    database.collection('careers').insertOne(newCareer).then(result => {
        if (result.insertedCount == 0) {
            response.status(200).json({ msg: "Failed insertion." })
        } else {
            response.status(200).json(result.insertedId);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/careers/get", (request, response) => {

    database.collection('careers').find({}).toArray().then((careers) => {
        if (careers == null) {
            response.status(200).json({ msg: "No careers found." })
        } else {
            response.status(200).json(careers);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/career/get/:code", (request, response) => {

    const code = request.params.code;
    database.collection('careers').findOne({ code: code }, (error, career) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (career == null) {
            response.status(200).json({ msg: "No career found." })
        } else {
            response.status(200).json(career);
        }
    });
});

app.put("/career/update/:code", (request, response) => {

});

app.delete("/career/delete/:code", (request, response) => {

});

//=========== Crud mps ===========//

app.post("/mp/create", (request, response) => {
    let newMp = request.body;
    let career_mongo_id = newMp.career_id;
    newMp.career_id = objectId(career_mongo_id);
    let date_start = newMp.date_start;

    if (date_start != null) {
        newMp.date_start = new Date(date_start);
    }
    let date_end = newMp.date_end;
    if (date_end != null) {
        newMp.date_end = new Date(date_end);
    }

    database.collection('mps').insertOne(newMp).then(result => {
        if (result.insertedCount == 0) {
            response.status(200).json({ msg: "Failed insertion." })
        } else {
            response.status(200).json(result.insertedId);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/mps/getbycareer/:careercode", (request, response) => {

    const careercode = request.params.careercode;
    database.collection('mps').aggregate([
        {
            $lookup:
            {
                from: "careers",
                localField: "career_id",
                foreignField: "_id",
                as: "mp_career"
            }
        },
        { $match: { 'mp_career.code': careercode } },
        {
            $project: {
                _id: 1,
                code: 1,
                name: 1,
                duration_min: 1,
                duration_max: 1,
                date_start: 1,
                date_end: 1,
                career_id: 1
            }
        }
    ]).toArray().then((mps) => {
        if (mps == null) {
            response.status(200).json({ msg: "No mps found." })
        } else {
            response.status(200).json(mps);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/mp/get/:code", (request, response) => {

    const code = request.params.code;
    database.collection('mps').findOne({ code: code }, (error, mp) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (mp == null) {
            response.status(200).json({ msg: "No mp found." })
        } else {
            response.status(200).json(mp);
        }
    });
});

app.put("/mp/update/:code", (request, response) => {

});

app.delete("/mp/delete/:code", (request, response) => {

});

app.delete("/mps/delete/:careercode", (request, response) => {

});

//=========== Crud ufs ===========//

app.post("/uf/create", (request, response) => {
    let newUf = request.body;
    let mp_mongo_id = newUf.mp_id;
    newUf.mp_id = objectId(mp_mongo_id);
    database.collection('ufs').insertOne(newUf).then(result => {
        if (result.insertedCount == 0) {
            response.status(200).json({ msg: "Failed insertion." })
        } else {
            response.status(200).json(result.insertedId);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/ufs/getbycareer/:careercode", (request, response) => {

    const careercode = request.params.careercode;
    database.collection('ufs').aggregate([
        {
            $lookup:
            {
                from: 'mps',
                localField: 'mp_id',
                foreignField: '_id',
                as: 'mp_uf'
            }
        },
        {
            $lookup:
            {
                from: 'careers',
                localField: 'mp_uf.0.career_id',
                foreignField: '_id',
                as: 'career_mp'
            }
        },
        { $match: { 'career_mp.0.code': careercode } },
        {
            $project: {
                _id: 1,
                code: 1,
                name: 1,
                duration: 1,
                isProject: 1,
                isFct: 1,
                isLanguage: 1
            }
        }
    ]).toArray().then((ufs) => {
        if (ufs == null) {
            response.status(200).json({ msg: "No ufs found." })
        } else {
            response.status(200).json(ufs);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/ufs/getbymp/:mpcode", (request, response) => {

    const mpcode = request.params.mpcode;
    database.collection('ufs').aggregate([
        {
            $lookup:
            {
                from: 'mps',
                localField: 'mp_id',
                foreignField: '_id',
                as: 'mp_uf'
            }
        },
        { $match: { 'mp_uf.code': mpcode } },
        {
            $project: {
                _id: 1,
                code: 1,
                name: 1,
                duration: 1,
                isProject: 1,
                isFct: 1,
                isLanguage: 1
            }
        }
    ]).toArray().then((ufs) => {
        if (ufs == null) {
            response.status(200).json({ msg: "No ufs found." })
        } else {
            response.status(200).json(ufs);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/uf/get/:code", (request, response) => {

    const code = request.params.code;
    database.collection('ufs').findOne({ code: code }, (error, uf) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (uf == null) {
            response.status(200).json({ msg: "No uf found." })
        } else {
            response.status(200).json(uf);
        }
    });

});

app.get("/uf/getbyid/:id", (request, response) => {

    const id = new objectId(request.params.id);
    database.collection('ufs').findOne({ _id: id }, (error, uf) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (uf == null) {
            response.status(200).json({ msg: "No uf found." })
        } else {
            response.status(200).json(uf);
        }
    });
});

app.put("/uf/update/:code", (request, response) => {

});

app.delete("/uf/delete/:code", (request, response) => {

});

app.delete("/ufs/delete/:careercode", (request, response) => {

});

app.delete("/ufs/delete/:mpcode", (request, response) => {

});

// ======== crud students ======== //

app.post("/student/create", (request, response) => {
    let newStudent = request.body;
    let birthday = newStudent.birthday;
    if (birthday != null) {
        newStudent.birthday = new Date(birthday);
    }
    
    for(i = 0; i <= newStudent.ufs_completed.length - 1; i++){
        newStudent.ufs_completed[i] = new objectId(newStudent.ufs_completed[i]);
    }

    newStudent.requirements_profile_id = objectId(newStudent.requirements_profile_id);

    database.collection('students').insertOne(newStudent).then(result => {
        if (result.insertedCount == 0) {
            response.status(200).json({ msg: "Failed insertion." })
        } else {
            response.status(200).json(result.insertedId);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/students/get", (request, response) => {

    database.collection('students').find({}).toArray().then((students) => {
        if (students == null) {
            response.status(200).json({ msg: "No students found." })
        } else {
            response.status(200).json(students);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/students/getbycareers/:careersFilter", (request, response) => {

    const careersSelectedStr = request.params.careersFilter;
    const careersSelected = careersSelectedStr.split('&');
    database.collection('enrollments').aggregate([
        {
            $lookup:
            {
                from: 'students',
                localField: 'student_id',
                foreignField: '_id',
                as: 'student'
            }
        },
        {
            $lookup:
            {
                from: 'careers',
                localField: 'career_id',
                foreignField: '_id',
                as: 'career'
            }
        },
        { $match: { 'career.0.code': { $in: careersSelected } } },
        {
            $project: {
                _id: 0,
                first: { $arrayElemAt: ["$student", 0] }
            }
        },
        { $replaceRoot: { newRoot: "$first" } }
    ]).toArray().then((students) => {
        if (students == null) {
            response.status(200).json({ msg: "No students found." })
        } else {
            response.status(200).json(students);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/student/getbydocid/:docId", (request, response) => {

    const docId = request.params.docId;
    database.collection('students').findOne({ 'document_id.id': docId }, (error, student) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (student == null) {
            response.status(200).json({ msg: "No student found." })
        } else {
            response.status(200).json(student);
        }
    });
});

app.put("/student/updatebydocid/:docId", (request, response) => {
    const docId = request.params.docId;
    let updatedStudent = request.body;

    let birthday = updatedStudent.birthday;
    if (birthday != null) {
        updatedStudent.birthday = new Date(birthday);
    }
    
    for(i = 0; i <= updatedStudent.ufs_completed.length - 1; i++){
        updatedStudent.ufs_completed[i] = new objectId(updatedStudent.ufs_completed[i]);
    }

    updatedStudent.requirements_profile_id = objectId(updatedStudent.requirements_profile_id);

    database.collection('students').replaceOne({ 'document_id.id': docId }, updatedStudent, (error, resultUpdate) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (resultUpdate.modifiedCount == 0) {
            response.status(200).json({ msg: "No student updated." })
        } else {
            response.status(200).json({ 'number of documents updated': resultUpdate.modifiedCount});
        }
    });
});

app.delete("/student/delete/:dni", (request, response) => {

});


// =================== CRUD ENROLLMENTS====================//

app.post("/enrollment/create", (request, response) => {
    let newEnrollment = request.body;

    let start_date = newEnrollment.start_date;
    if (start_date != null) {
        newEnrollment.start_date = new Date(start_date);
    }
    let end_date = newEnrollment.end_date;
    if (end_date != null) {
        newEnrollment.end_date = new Date(end_date);
    }
    
    for(i = 0; i <= newEnrollment.ufs_id.length - 1; i++){
        newEnrollment.ufs_id[i] = new objectId(newEnrollment.ufs_id[i]);
    }
    
    newEnrollment.career_id = objectId(newEnrollment.career_id);
    newEnrollment.student_id = objectId(newEnrollment.student_id);

    database.collection('enrollments').insertOne(newEnrollment).then(result => {
        if (result.insertedCount == 0) {
            response.status(200).json({ msg: "Failed insertion." })
        } else {
            response.status(200).json(result.insertedId);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});


// =============== CRUD REQUIREMENTS ============= //

app.post("/requirements_profile/create", (request, response) => {
    let newReqProfile = request.body;

    database.collection('requirements_profile').insertOne(newReqProfile).then(result => {
        if (result.insertedCount == 0) {
            response.status(200).json({ msg: "Failed insertion." })
        } else {
            response.status(200).json(result.insertedId);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});

app.get("/requirements_profile/getbyid/:id", (request, response) => {

    const id = new objectId(request.params.id);
    database.collection('requirements_profile').findOne({ '_id': id }, (error, requirements_profile) => {
        if (error) {
            return response.status(500).json({ error: error.message });
        }
        if (requirements_profile == null) {
            response.status(200).json({ msg: "No requirements profile found." })
        } else {
            response.status(200).json(requirements_profile);
        }
    });
});

app.get("/requirements_profile/get", (request, response) => {

    database.collection('requirements_profile').find({}).toArray().then((reqProfiles) => {
        if (reqProfiles == null) {
            response.status(200).json({ msg: "No requirements profile found." })
        } else {
            response.status(200).json(reqProfiles);
        }
    }).catch((error) => {
        return response.status(500).json({ error: error.message });
    });
});
