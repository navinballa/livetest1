const {
    create,
    getStudents,
    getStudentByStudentRno,
    updateStudents,
    deleteStudent
  } = require("./student.service");
  
 
  module.exports = {
    createStudent: (req, res) => {
      const body = req.body;
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    },
    getStudentByStudentRno: (req, res) => {
      const studentRno = req.params.studentRno;
  
      getStudentByStudentRno(studentRno, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
    getStudents: (req, res) => {
        getStudents((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results,
        });
      });
    },
    updateStudents: (req, res) => {
      const body = req.body;
      
      updateStudents(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          res.json({
            success: 0,
            message: "Failed to update",
          });
        }
        return res.json({
          success: 1,
          data: "Updated successfully",
        });
      });
    },
    deleteStudent: (req, res) => {
      const data = req.body;
      deleteStudent(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not found",
          });
        }
        return res.json({
          success: 1,
          data: "user deleted successfully",
        });
      });
    },
  };
  