// mongo db
// require("./config/db");

const express = require("express");

const app = express();
const PORT = 6000;

//routers
// const userRouter = require("./api/user");

//For accepting Post form data submission
const bodyParser = require("express").json();
app.use(bodyParser);

//user routers
// app.use("/user", userRouter);

app.listen(PORT, (error) => {
  if (!error)
    console.log(`Server is running and app is listening on port ${PORT}`);
  else console.log("Error occured, server can't start \n" + error);
});
