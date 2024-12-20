const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('startup');
const userCollection = db.collection('user');
const itemCollection = db.collection('item');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addItem(item) {
  return itemCollection.insertOne(item)
}

async function updateItemViews(itemId) {
  await itemCollection.updateOne({ itemId }, { $inc: { itemViews: 1 } });
  const item = await itemCollection.findOne({ itemId });
  let itemViews = item.itemViews
  return itemViews;
}
function getItems(){
   return itemCollection.find({}).toArray()
}


module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addItem,
  getItems,
  updateItemViews
};
