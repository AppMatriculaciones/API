const express = require('express');
const app = express();
const port = process.env.PORT || 5000
var mail = "";
var psswd = "";

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
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
	//res.json({mensaje: 'Alumno con email: '+ req.params.email +' y contraseña: '+ req.params.psswd});
	var result = main(mail,psswd);
	res.send({result: 'Administrador con email: '+ result});
});

/*
app.get("/api/auth/admins/:email/:psswd",function(req,res) {
	mail = req.params.email;
	psswd = req.params.psswd;
	res.send({mensaje: 'Administrador con email: '+ req.params.email +' y contraseña: '+ req.params.psswd});
	result = main(mail,psswd);
	res.json(result);
});

*/





// de momento en este fichero futuramente en mongoConection
async function main(email,psswd){
    const uri = "mongodb+srv://alec:alec@mflix.spncl.mongodb.net/project_online_enrollement?authSource=admin&replicaSet=atlas-5qhdga-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    const client = new MongoClient(uri);
    await client.connect();
 	const db = client.db('project_online_enrollement');
 	const collection=db.collection('students');
    try {
       	result= await findOneListingByName(client,collection,email,psswd);
       	return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function findOneListingByName(client,collection, email,psswd) {
    const result = await collection.find({email: email}).toArray();

    if (result[0]!=null) {
        console.log(`Found a listing in the collection with the email '${email}':`);
        console.log(result);
        if(result.length != 0){
        	return "Usuario encontrado";
        }else{
        	return "NOT FOUND";
        }
    } else {
        console.log(`No listings found with the email '${email}'`);
    }
}


