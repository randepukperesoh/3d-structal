import mysql from 'mysql'
 
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "", 
    database: "VKRnew"
});

export default pool;

