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

// User Routes Loading

const userRoutes = require ("./routes/user.routes");
userRoutes(app);

// Token middleware
tkFn= require("./middleware/verifyToken");
app.use(tkFn);

// Student Routes Loading
const studentRoutes = require ("./routes/student.routes");
studentRoutes(app);

// Teacher Routes Loading

const teacherRoutes = require ("./routes/teacher.routes");
teacherRoutes(app);

// Course Routes Loading

const courseRoutes = require ("./routes/course.routes");
courseRoutes(app);

// Period Routes Loading

const periodRoutes = require ("./routes/period.routes");
periodRoutes(app);

/** Faculty Routes Loading */
const facultyRoutes = require("./routes/faculty.route");
facultyRoutes(app);

/** Program Routes Loading */
const programRoutes = require("./routes/program.route");
programRoutes(app);

app.listen(port, ()=>{
    console.log("server is running")
});