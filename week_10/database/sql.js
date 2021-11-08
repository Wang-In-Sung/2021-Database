import mysql from "mysql2";

//내 데이터베이스와 연결함
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'p12171806',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
//async / await 사용
const promisePool = pool.promise();

//select query
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`); //select문 실행
        
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`); //select문 실행

        return rows
    },
    getfood : async () => {
        const [rows] = await promisePool.query(`select * from food`); //select문 실행

        return rows
    },
}

//delete query
export const deleteSql = {
    /*deleteDepartment : async (data) => {
        console.log('deleteSql.deleteDepartment:', data.Dnumber);
        const sql = `delete from department where Dnumber = ${data.Dnumber}`;
        await promisePool.query(sql);
    },*/
    deletefood : async (data) => {
        console.log('deleteSql.deletefood:', data.F_number);
        const sql = `delete from food where F_number = ${data.F_number}`;
        await promisePool.query(sql);
    },
}
