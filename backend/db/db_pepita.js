//Call mongoose module
const mongoose = require("mongoose");

//Create arrow function to connect with DataBase
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.TIENDA_PEPITA_DB_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: It`s ON");
  } catch (e) {
    console.log("Error connecting to MongoDB ", e);
    throw new Error("Error connecting to MongoDB, soething is wrong");
  }
};

//Generate DataBase module
module.exports = { dbConnection };
