const mongoose = require("mongoose");

const { MONGO_DB_CONNECTION_STRING, MONGO_DB_NAME } = process.env;

//connect db
const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_DB_CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.stack);
  }
};

//close db
const closeDb = async () => {
  await mongoose.connection.close();
};

module.exports = { connectDb, closeDb };
