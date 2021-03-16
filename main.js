const {MongoClient} = require('mongodb');
const express = require('express')
const app = express()
const port = 3000
var mail = "";
var psswd = "";
var jwt = require('jsonwebtoken')
// alec.adrian.teucilide@gmail.com
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get("/test",(req,res) => {
	res.json("Test Correcto");
});

app.get("/api/auth/alumns/:email/:psswd",function(req,res) {
	mail = req.params.email;
	psswd = req.params.psswd;
	result = main(mail,psswd);
	console.log(result);
	res.json({mensaje: 'Buscando en la base de datos en el Alumno'});
});


app.get("/api/auth/admins/:email/:psswd",function(req,res) {
	mail = req.params.email;
	psswd = req.params.psswd;
	result = main(mail,psswd);
	console.log(result);
	res.json({mensaje: 'Buscando en la base de datos el Administrador'});
});





// de momento en este fichero futuramente en mongoConection
async function main(email,psswd){
    const uri = "mongodb+srv://alec:alec@mflix.spncl.mongodb.net/project_online_enrollement?authSource=admin&replicaSet=atlas-5qhdga-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    const client = new MongoClient(uri);
    await client.connect();
 	const db = client.db('project_online_enrollement');
 	const collection=db.collection('students');
    try {
       	result= await findOneListingByName(db,collection,email,psswd);
       	return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findOneListingByName(db,collection, email,psswd) {
    const result = await collection.find({email: email}).toArray();

    if (result[0]!=null) {
        console.log(`Found a listing in the collection with the email '${email}':`);
        console.log(result);
        if(result.length != 0){
        	return "Usuario encontrado";
        	console.log(`Usuario encontrado '${email}'`);
        	collection.updateOne({email: email}, {$set: {token: "tokenChanged"}});
        }else{
        	return "NOT FOUND";
        	console.log(`No listings found with the email '${email}'`);
        }
    } else {
        console.log(`No listings found with the email '${email}'`);
    }
}