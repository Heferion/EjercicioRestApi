/** Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json;
const urlEncodedParser= bodyParser.urlencoded(
    {extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

app.get("/", (req, res, next)=>{
    res.send("welcome to academic rest api");
});

const studentRoutes = require ("./routes/student.routes");
studentRoutes(app);

app.listen(port, ()=>{
    console.log("server is running")
});