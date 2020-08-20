const {
    createStudent,
    updateStudents,
    deleteStudent,
    getStudentByStudentRno,
    getStudents,
    countStudents
  } = require("./student.controller");
  const router = require("express").Router();
  
  router.post("/", createStudent);
  router.get("/", getStudents);
  router.patch("/",  updateStudents);
  router.delete("/",  deleteStudent);
  router.get("/count",  countStudents);
  router.get("/:studentRno", getStudentByStudentRno);
  
  module.exports = router;
  