const {
    createBook,
    updateBooks,
    deleteBook,
    getBookByBookId,
    getBooks,
    countBooks
  } = require("./book.controller");
  const router = require("express").Router();
  
  router.post("/", createBook);
  router.get("/", getBooks);
  router.patch("/",  updateBooks);
  router.delete("/",  deleteBook);
  router.get("/count",  countBooks);
  router.get("/:bookId", getBookByBookId);
  
  module.exports = router;
  