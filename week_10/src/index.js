import express from "express";
import logger from "morgan";
import path from "path";
//라우터 폴더로 이동후 파일 import
import loginRouter from "../routes/login"
import selectRouter from "../routes/select"
import deleteRouter from "../routes/delete"

const PORT = 3000;

const app = express();  //서버를 연결해주는 모듈

//웹에서 데이터 다루기 편하기 위해 사용
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//어떤 폴더로 가서 어떤 파일의 형식을 웹 화면에 도출할 것인지 설정
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

//뭘 사용할지 설정
app.use(logger("dev"));

//라우터 주소 설정 "/주소"로 갔을 때 사용되는 라우터 설정
app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})