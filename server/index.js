const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const corsOptions = {
  origin: "*",
  "Access-Control-Allow-Origin": "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use(bodyParser.json());
const connectDB = require("./config/Mongo.Config");

connectDB();

app.use("/api/task", require("./routes/todo.routes"));

app.listen(process.env.PORT || 9000, () => {
  console.log(process.env.PORT);
});
