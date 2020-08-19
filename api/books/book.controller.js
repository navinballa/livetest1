const {
    create,
    getBooks,
    getBookByBookId,
    updateBooks,
    deleteBook
  } = require("./book.service");
  
  const { genSaltSync, hashSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");
  
  module.exports = {
    createBook: (req, res) => {
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
    getBookByBookId: (req, res) => {
      const bookId = req.params.bookId;
  
      getBookByBookId(bookId, (err, results) => {
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
    getBooks: (req, res) => {
      getBooks((err, results) => {
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
    updateBooks: (req, res) => {
      const body = req.body;
      
      updateBooks(body, (err, results) => {
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
    deleteBook: (req, res) => {
      const data = req.body;
      deleteBook(data, (err, results) => {
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
  