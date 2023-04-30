//jshint esversion:6

const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors');

const app = express();

const port = 5000;

connectDB();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
  origin: allowedOrigins,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/cities", require("./routes/cityRoutes"));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
