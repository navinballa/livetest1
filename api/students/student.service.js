const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(`
        INSERT INTO students
        (studentRno, studentName, studentAdd, studentMno)
        VALUES
        (?, ?, ?, ?)
        `, 
        [
            data.studentRno,
            data.studentName,
            data.studentAdd,
            data.studentMno
        ],
        (error, results, fields)=>{
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        });
    }
    ,
    getStudents: callBack => {
        pool.query(`
        SELECT studentRno, studentName, studentAdd, studentMno
        FROM students
        `, [], 
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
                }            
            return callBack(null, results);
        });
    }
    ,
    countStudents: callBack => {
        pool.query(`
        SELECT COUNT(*) AS total FROM students
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
    getStudentByStudentRno: (studentRno, callBack) => {
        pool.query(`
        SELECT studentRno, studentName, studentAdd, studentMno
        FROM students
        WHERE studentRno = ?
        `, [studentRno],
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        });
    }
    ,
    updateStudents: (data, callBack) => {
        pool.query(`
        UPDATE students SET studentName=?, studentAdd=?, studentMno=? WHERE studentRno = ?
        `,
        [
            data.studentName,
            data.studentAdd,
            data.studentMno,
            data.studentRno
        ],
        (error, results, fields)=> {
            if (error) {
                return callBack(error);
            }
            return callBack(error, results);
        });
    }
    ,
    deleteStudent: (data, callBack) => {
        pool.query(`
        DELETE FROM students WHERE studentRno = ?
        `,
        [
            data.studentRno
        ],
        (error, results, fields)=> {
            if (error) {
                return callBack(error);
            }
            return callBack(error, results);
        });
    }
};