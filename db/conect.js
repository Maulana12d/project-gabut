const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri ="mongodb+srv://gajahpetir7:<db_password>@cluster0.pv0wj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('gabut');
    const user = database.collection('user');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'wong ggh' };
    const movie = await user.findOne(query);
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);