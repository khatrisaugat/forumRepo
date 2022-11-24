const { MongoClient } = require("mongodb");

const { MONGO_DB_CONNECTION_STRING, MONGO_DB_NAME } = process.env;

export const client = new MongoClient(MONGO_DB_CONNECTION_STRING);

//connect db
export const connectDb = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    return client.db(MONGO_DB_NAME);
  } catch (err) {
    console.log(err.stack);
  }
};

//close db
export const closeDb = async () => {
  await client.close();
};
