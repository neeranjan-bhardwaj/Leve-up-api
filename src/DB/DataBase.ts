import mysql from 'mysql2'

export const User=mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.PORT),
}).promise();