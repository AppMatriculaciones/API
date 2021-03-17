/*module.exports = {
	main()
};*/
//ARCHIVE NO EN USO -> NO USAR POR EL MOMENTO
const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb+srv://alec:alec@mflix.spncl.mongodb.net/project_online_enrollement?authSource=admin&replicaSet=atlas-5qhdga-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
    //db.name(project_online_enrollement);
    const client = new MongoClient(uri);
    await client.connect();
 	const db = client.db('project_online_enrollement');
 	const collection=db.collection('students');
    try {
        // Connect to the MongoDB cluster
        await findOneListingByName(client,collection,"Jesus");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);

async function findOneListingByName(client,collection, name) {
    const result = await collection.find({name: name});
    if (result) {
        console.log(`Found a listing in the collection with the name '${name}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${name}'`);
    }
}