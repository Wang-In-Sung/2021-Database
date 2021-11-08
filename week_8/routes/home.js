import express from "express";
import { insertSql, selectSql } from "../database/sql"; // 삽입과 관련된 query함수 import

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');     //home.hbs파일을 찾아서 웹브라우저에 실행한다
});

router.post('/', (req, res) => {    //입력받은 값들을 처리하는 부분
    const vars = req.body;          //입력받은 데이터를 저장
    const var_length = Object.keys(req.body).length;    //넘어오는 데이터의 개수로 employee인지, department인지 구분 후 데이터를 넘겨주도록 구현

    if(var_length > 4){     //4초과 employee
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
    } else {        //4이하 department
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/');      //데이터 처리 후 새로고침
})

module.exports = router;