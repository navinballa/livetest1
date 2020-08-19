const {
    createStudent,
    updateStudents,
    deleteStudent,
    getStudentByStudentRno,
    getStudents
  } = require("./student.controller");
  const router = require("express").Router();
  
  router.post("/", createStudent);
  router.get("/", getStudents);
  router.get("/:studentRno", getStudentByStudentRno);
  router.patch("/",  updateStudents);
  router.delete("/",  deleteStudent);
  
  module.exports = router;
  