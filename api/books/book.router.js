const {
    createBook,
    updateBooks,
    deleteBook,
    getBookByBookId,
    getBooks
  } = require("./book.controller");
  const router = require("express").Router();
  
  router.post("/", createBook);
  router.get("/", getBooks);
  router.get("/:bookId", getBookByBookId);
  router.patch("/",  updateBooks);
  router.delete("/",  deleteBook);
  
  module.exports = router;
  