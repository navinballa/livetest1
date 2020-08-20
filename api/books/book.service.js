const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(`
        INSERT INTO books
        (bookId, bookName, bookAuth, bookQuantity, bookCost)
        VALUES
        (?, ?, ?, ?, ?)
        `, 
        [
            data.bookId,
            data.bookName,
            data.bookAuth,
            data.bookQuantity,
            data.bookCost
        ],
        (error, results, fields)=>{
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        });
    }
    ,
    getBooks: callBack => {
        pool.query(`
        SELECT bookId, bookName, bookAuth, bookQuantity, bookCost
        FROM books
        `, [], 
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
                }            
            return callBack(null, results);
        });
    }
    ,
    countBooks: callBack => {
        pool.query(`
        SELECT COUNT(*) AS total FROM books
        `, [], 
        (error, results, fields)=>{
            console.log(results);
            if (error) {
                return callBack(error);
                }            
            return callBack(null, results[0]);
        });
    }
    ,
    getBookByBookId: (bookId, callBack) => {
        pool.query(`
        SELECT bookId, bookName, bookAuth, bookQuantity, bookCost
        FROM books
        WHERE bookId = ?
        `, [bookId],
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        });
    }
    ,
    updateBooks: (data, callBack) => {
        pool.query(`
        UPDATE books SET bookName=?, bookAuth=?, bookQuantity=?, bookCost=? WHERE bookId = ?
        `,
        [
            data.bookName,
            data.bookAuth,
            data.bookQuantity,
            data.bookCost,
            data.bookId
        ],
        (error, results, fields)=> {
            if (error) {
                return callBack(error);
            }
            return callBack(error, results);
        });
    }
    ,
    deleteBook: (data, callBack) => {
        pool.query(`
        DELETE FROM books WHERE bookId = ?
        `,
        [
            data.bookId
        ],
        (error, results, fields)=> {
            if (error) {
                return callBack(error);
            }
            return callBack(error, results);
        });
    }
};