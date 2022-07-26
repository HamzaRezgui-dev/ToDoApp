const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

const app = express()

app.use(cors({origin: "*"}))
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const connectDB = require("./config/Mongo.Config");

connectDB();

app.use("/api/task", require("./routes/todo.routes"));


app.listen(process.env.PORT || 8080, () => {
    console.log(process.env.PORT);
  });