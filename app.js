require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const bookRouter = require("./api/books/book.router");
const studentRouter = require("./api/students/student.router");

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/students", studentRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server started");
});
