const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(`
        INSERT INTO registration
        (firstName, lastName, gender, email, password, number)
        VALUES
        (?, ?, ?, ?, ?, ?)
        `, 
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number
        ],
        (error, results, fields)=>{
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        });
    }
    ,
    getUsers: callBack => {
        pool.query(`
        SELECT firstName, lastName, gender, email, number 
        FROM registration
        `, [], 
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
                }            
            return callBack(null, results);
        });
    }
    ,
    getUserByUserId: (id, callBack) => {
        pool.query(`
        SELECT firstName, lastName, gender, email, number 
        FROM registration
        WHERE id = ?
        `, [id],
        (error, results, fields)=>{
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0 ]);
        });
    }
    ,
    updateUsers: (data, callBack) => {
        pool.query(`
        UPDATE registration SET firstName=?, lastName=?, gender=?, email=?, password=?, number=? WHERE id = ?
        `,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
        ],
        (error, results, fields)=> {
            if (error) {
                return callBack(error);
            }
            return callBack(error, results);
        });
    }
    ,
    deleteUser: (data, callBack) => {
        pool.query(`
        DELETE FROM registration WHERE id = ?
        `,
        [
            data.id
        ],
        (error, results, fields)=> {
            if (error) {
                return callBack(error);
            }
            return callBack(error, results);
        });
    }
    ,
    getUserByUserEmail: (email, callBack) => {
        pool.query(`
        SELECT * FROM registration WHERE email = ?
        `, [email],
        (error, results, fields)=>{
            if (error) {
              return  callBack(error);
            }
            return callBack(null, results[0]);
        });
    }
};