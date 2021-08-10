//Call modules
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db_pepita");
const Product = require("./routes/product")
const Store = require ("./routes/store")
require("dotenv").config();

//Create aplication
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/tienda-donde-pepita", Product);
app.use("/api/tienda-donde-pepita", Store);

//Listen 3003 Port
app.listen(process.env.PORT, () => console.log("Backend server is running OK on port: ", process.env.PORT)
    );

//Connect with DataBase
dbConnection();
