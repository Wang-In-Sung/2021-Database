import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    /*const department = await selectSql.getDepartment(); //department를 불러와서 저장
    res.render('select', {      //select.hbs파일을 불러와서 실행
        title: 'IT 공대',
        department
    });*/
    const food = await selectSql.getfood(); //food를 불러와서 저장
    res.render('select', {      //select.hbs파일을 불러와서 실행
        title: '맛있는 음식',
        food
    });
});

module.exports = router;