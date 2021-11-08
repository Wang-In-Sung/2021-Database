import express from "express";
import { selectSql } from "../database/sql"; // 삽입과 관련된 query함수 import

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');     //home.hbs파일을 찾아서 웹브라우저에 실행한다
});

router.post('/', async (req, res) => {    //입력받은 값들을 처리하는 부분
    const vars = req.body;          //입력받은 데이터를 저장
    const users = await selectSql.getUsers();
    let whoAmI = '';
    let checkLogin = false;

    users.map((user)=> {
        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password){ //입력받은 아이디와 비밀번호가 저장되어있는 값과 같은 경우 로그인 성공
            console.log('login success!');
            checkLogin = true;
            if (vars.id === 'admin'){
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })

    if (checkLogin && whoAmI === 'admin'){  //로그인이 성공했고, 입력받은 아이디가 admin인 경우 /delete로 이동
        res.redirect('/delete');
    } else if (checkLogin && whoAmI === 'user'){    //로그인이 성공했고, 입력받은 아이디가 test인 경우 /select로 이동
        res.redirect('/select');
    } else {
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports = router;