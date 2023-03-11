import mysql from 'mysql';

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Xaajimacow3321",
    database:"social"

})