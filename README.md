# 2021-Database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:Wang-In-Sung/2021-Database.git
    - (token을 사용하는 경우) git clone http://github.com/Wang-In-Sung/2021-Database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ??{
        host: 'localhost',
        user: 'root',
        database: 'tutorial',
        password: 'p12171806'
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
<br>

### 테이블 작성법

이름|과|전공|학번
---|---|---|---
왕인성|정보통신공학과|정보통신|12171806
홍길동|컴퓨터과학과|데이터베이스|12181838
이순신|인공지능학과|인공지능|12161819
<br>

## 8주차 실습 과제 <웹 상에서 MySQL 사용하기>
1. 소스코드 분석 후 주석 작성
2. 두 테이블에 데이터 삽입하여 결과를 조회하여 확인
    - Employee 테이블 5개 이상, Department 테이블 3개 이상의 값을 insert
        - 한글 데이터 입력해도 무방
    - 조회한 결과를 캡처
    - <span style="color:orange">테이블 예시</span>

    Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
    ---|---|---|---|---|---|---|---|---|---
    철수|A|김|12341234|1998-03-15|안산|남|4000|11221212|3
    민희|B|최|13331233|1999-08-11|시흥|남|6000|11241412|5
<<<<<<< HEAD

    Dname|Dnumber|Mgr_ssn|Mgr_start_date
    ---|---|---|---
    정보통신공학과|1|11221212|2021-01-01
    컴퓨터공학과|2|11321312|2021-01-01

    - Employee 테이블의 Salary 필드의 값을 입력받아 수정 가능하게 구현
        - WHERE에 사용되는 조건을 설정
    <pre>
    <code>
    export const updateSql = {
        updateEmployee : async (data) => {
        const sql = `update employee set salary = "${data.Salary}" where Minit = "F"`;
        }
    }
    </code>
    </pre>
    <br>

## 10주차 실습 과제 <웹 상에서 MySQL 사용하기>
1. 소스코드 분석 후 주석 작성
    - index.js, sql.js, login.js, select.js, delete.js
2. 임의의 새로운 테이블을 생성 후 데이터 삽입후 웹상에서 삭제한 결과가 반영되는지 확인
    - 새로운 테이블 생성 <<span style="color:yellow">food table</span>>

    name|Main_Ingredient|Sub_Ingredient|F_number|
    ---|---|---|---|
    닭백숙|닭고기|마늘|1
    갈비찜|돼지고기|간장|2
    - 5개 이상의 값을 insert한 후 '삭제'버튼 클릭시 정상 동작함을 확인
3. sql.js 파일에서 delete query의 where문을 수정
    <pre>
    <code>
    deletefood : async (data) => {
        console.log('deleteSql.deletefood:', data.F_number);
        const sql = `delete from food where F_number = ${data.F_number}`;
        await promisePool.query(sql);
    },
    </code>
    </pre>
    where 조건을 음식의 번호를 기준으로 잡고 delete가 될 수 있도록 구현
    <br>
    <br>
## 11주차 실습 과제 <깃헙 사용법>
1. 실습 과제들을 깃헙에 업로드
2. README.md 파일에 3, 8, 10주차 과제 설명

<br>
<br>
# 나의 깃 주소 
- https://github.com/Wang-In-Sung/2021-Database
=======

    Dname|Dnumber|Mgr_ssn|Mgr_start_date
    ---|---|---|---
    정보통신공학과|1|11221212|2021-01-01
    컴퓨터공학과|2|11321312|2021-01-01

    - Employee 테이블의 Salary 필드의 값을 입력받아 수정 가능하게 구현
        - WHERE에 사용되는 조건을 설정
    <pre>
    <code>
    export const updateSql = {
        updateEmployee : async (data) => {
        const sql = `update employee set salary = "${data.Salary}" where Minit = "F"`;
        }
    }
    </code>
    </pre>
    <br>

## 10주차 실습 과제 <웹 상에서 MySQL 사용하기>
1. 소스코드 분석 후 주석 작성
    - index.js, sql.js, login.js, select.js, delete.js
2. 임의의 새로운 테이블을 생성 후 데이터 삽입후 웹상에서 삭제한 결과가 반영되는지 확인
    - 새로운 테이블 생성 <<span style="color:yellow">food table</span>>

    name|Main_Ingredient|Sub_Ingredient|F_number|
    ---|---|---|---|
    닭백숙|닭고기|마늘|1
    갈비찜|돼지고기|간장|2
    - 5개 이상의 값을 insert한 후 '삭제'버튼 클릭시 정상 동작함을 확인
3. sql.js 파일에서 delete query의 where문을 수정
    <pre>
    <code>
    deletefood : async (data) => {
        console.log('deleteSql.deletefood:', data.F_number);
        const sql = `delete from food where F_number = ${data.F_number}`;
        await promisePool.query(sql);
    },
    </code>
    </pre>
    where 조건을 음식의 번호를 기준으로 잡고 delete가 될 수 있도록 구현
    <br>
    <br>
## 11주차 실습 과제 <깃헙 사용법>
1. 실습 과제들을 깃헙에 업로드
2. README.md 파일에 3, 8, 10주차 과제 설명

<br>
<br>
# 나의 깃 주소 
- https://github.com/Wang-In-Sung/2021-Database


>>>>>>> 543aadd6e91f905761c2bcf13e731516452abe72
