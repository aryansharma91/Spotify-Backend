const express = require("express");
const cookieParser = require("cookie-parser") // It allows your server to read cookies from the request
const authRoutes = require("./routes/auth.routes.js")

const app = express();
app.use(express.json()); // It allows your server to read JSON data from the request body
app.use(cookieParser()); // It allows your server to read cookies from the request

app.use("/api/auth", authRoutes);

module.exports = app; 
