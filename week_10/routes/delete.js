import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

//기존의 입력값을 불러온다
router.get('/', async (req, res) => {
    //const department = await selectSql.getDepartment();
    const food = await selectSql.getfood();

    res.render('delete',{
        title: "삭제 기능",
        //department
        food
    });
});

//삭제 버튼을 눌렀을 경우 delete query실행하여 조회 페이지로 이동
router.post('/', async (req, res) =>{
    console.log('delete router:', req.body.delBtn);

    const data = {
        //Dnumber: req.body.delBtn,
        F_number: req.body.delBtn,
    };
   // await deleteSql.deleteDepartment(data);
    await deleteSql.deletefood(data);
    res.redirect('/delete'); //delete 페이지로 이동
});

module.exports = router;