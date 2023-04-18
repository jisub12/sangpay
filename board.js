// import { paginate, addBtnEvent, pageBtnRender, count, currentPage } from "./a_share.js";

// 게시물 목록

// --------------------
// 한 페이지에 보여줄 게시물 개수
let count = 5;

let currentPage = 1;

// 처음 실행되면 작동할 함수
window.onload = function () {
    console.log("dfdfd");

    // 페이지네이션 함수 실행
    paginate(JSON.parse(window.localStorage.getItem("board")));

    // 처음 실행했을때 1번 페이지가 표시되게
    render(0, currentPage * count - 1, 1);

    addBtnEvent();
}


// 페이지네이션 함수(출력할 리스트를 매개변수로 받음)
function paginate(list) {
    if (!list) {
        window.localStorage.setItem('board', 0);
    }

    console.log("페이지네이션");
    let listLength = list.length;

    // 페이지 번호를 표시해줄 div
    let pageNumDiv = document.querySelector('.a-board-pagenum');

    // 총 페이지 개수 구하는
    let totalPage = Math.ceil(listLength / count);
    console.log(totalPage);

    // 페이지 개수만큼 페이지 번호 버튼 생성
    for (let i = 1; i <= totalPage; i++) {
        let numbtn = document.createElement('input');
        numbtn.setAttribute("type", "radio");
        numbtn.setAttribute("name", "pagenum");
        // 페이지번호 버튼의 id값으로 i 설정(id=페이지번호)
        numbtn.setAttribute("id", i);
        numbtn.setAttribute("class", `a-numbtn numbtn-${i}`);

        let numbtnLabel = document.createElement('label');
        numbtnLabel.textContent = i;
        numbtnLabel.setAttribute("for", i);
        numbtnLabel.setAttribute("name", "pagenum");

        // 페이지 번호를 표시해줄 div에 페이지 번호 버튼 추가
        pageNumDiv.append(numbtn, numbtnLabel);
    }

    // 페이지 번호 버튼들
    let numbtns = document.querySelectorAll('.a-numbtn');
    numbtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // 만약 배열의 마지막 요소의 인덱스보다 end가 크다면 end를 배열의 마지막요소의 인덱스로 설정
            let i = parseInt(btn.getAttribute('id'));
            let end = i * count - 1;
            if (end >= listLength) {
                end = listLength - 1;
            }
            currentPage = i;
            render((i - 1) * count, end, i);
        });
    });
}

//버튼에 이벤트 추가하는 함수
function addBtnEvent() {

    // 작성하기 버튼
    let user = getCurrentUser();
    document.querySelector('.a-board-add').addEventListener('click', function () {
        if (!user) {
            alert("로그인하세요");
        } else {
            location.href = `board_edit.html`;
        }
    });

    // 다음버튼
    document.querySelector("#nextBtn").addEventListener('click', function () {
        goNext(JSON.parse(window.localStorage.getItem("board")).length);
    });

    // 이전버튼
    document.querySelector("#prevBtn").addEventListener('click', function () {
        goPrev();
    });
}


// 이전 버튼 눌렀을때 작동하는 함수
function goPrev() {
    currentPage -= 1;

    let start = (currentPage - 1) * count;
    let end = currentPage * count - 1;

    render(start, end, currentPage);
}

// 다음 버튼 눌렀을때 작동하는 함수
function goNext(listLength) {
    currentPage += 1;

    let start = (currentPage - 1) * count;
    let end = currentPage * count - 1;

    if (end >= listLength) {
        end = listLength - 1;
    }
    render(start, end, currentPage);
}


// 게시판 출력
function render(start, end, pagenum) {
    let boardList = JSON.parse(window.localStorage.getItem("board"));

    // 가장 최근 게시물이 먼저 출력되게
    boardList.reverse();

    let boardListDiv = document.querySelector('.a-board-list');
    boardListDiv.innerHTML = "";

    let ul = document.createElement('ul');
    let no = document.createElement('li');
    let title = document.createElement('li');
    let user = document.createElement('li');
    let date = document.createElement('li');

    ul.setAttribute("class", "a-board-tablelist");
    no.setAttribute("class", "a-w1 a-title");
    title.setAttribute("class", "a-w4 a-title");
    user.setAttribute("class", "a-w2 a-title");
    date.setAttribute("class", "a-w3 a-title");

    no.textContent = `번호`;
    title.textContent = `제목`;
    user.textContent = `작성자`;
    date.textContent = `작성일`;

    ul.append(no, title, user, date);
    boardListDiv.append(ul);

    for (let i = start; i <= end; i++) {
        // board 클릭하면 상세페이지로 이동하는 부분 추가해야함
        let board = boardList[i];

        let ul = document.createElement('ul');
        let no = document.createElement('li');
        let title = document.createElement('li');
        let user = document.createElement('li');
        let date = document.createElement('li');

        ul.setAttribute("class", "a-board-tablelist");
        no.setAttribute("class", "a-w1 a-list");
        title.setAttribute("class", "a-w4 a-list");
        user.setAttribute("class", "a-w2 a-list");
        date.setAttribute("class", "a-w3 a-list");

        // no.textContent = `${board.no}`;
        no.textContent = `${i + 1}`;
        title.textContent = `${board.title}`;
        user.textContent = `${board.user}`;
        date.textContent = `${board.date}`;

        title.addEventListener("click", function () {
            location.href = `board_detail.html?${board.no}`;
        });

        ul.append(no, title, user, date);
        boardListDiv.append(ul);
    }

    // 이전/다음 버튼 설정
    pageBtnRender(boardList.length, pagenum);
}

function pageBtnRender(listLength, pagenum) { // 페이지 이전/다음 버튼 display값 설정
    let totalPage = Math.ceil(listLength / count);

    let nextBtn = document.querySelector("#nextBtn");
    let prevBtn = document.querySelector("#prevBtn");

    // 현재 첫번째 페이지라면 이전 버튼 출력 X
    if (pagenum == 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "block";
    }
    // 현재 마지막 페이지라면 다음 버튼 출력 X
    if (pagenum == totalPage) {
        nextBtn.style.display = "none";
        prevBtn.style.display = "block";
    }

    if (pagenum != 1 && pagenum != totalPage) {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }

    // 현재 페이지로 체크되게
    document.querySelector(`.numbtn-${pagenum}`).checked = "checked";
}

// 게시물 객체 생성자 함수
// function Board(no, title, content, user, date, answer) {
export function Board(no, title, content, user, date, answer) {
    this.no = no;
    this.title = title;
    this.content = content;
    this.user = user;
    this.date = date;
    this.answer = answer;
}

// 게시물 수정,삭제(+답변등록, 답변수정) 함수
export function boardListEdit({ board, value }) {
    // function boardListEdit(board, value) {
    console.log("게시물수정삭제함수")
    console.log(board);
    console.log(value);

    let boardList = JSON.parse(localStorage.getItem('board'));
    let idx = boardList.findIndex(function (item) { return item.no == board.no });

    switch (value) {
        case "수정":
            boardList.splice(idx, 1, board);
            console.log(boardList);
            break;

        case "삭제":
            boardList.splice(idx, 1);
            console.log(boardList);
            break;
    }

    localStorage.setItem("board", JSON.stringify(boardList));
}


// 쿠키에서 현재 사용자 아이디 가져오는 함수
export function getCurrentUser() {

    let userId = "";

    // 임의로 쿠키 생성
    let expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 100000 * 1000);
    // document.cookie = `user_id=${"admin"}; expires=` + expireDate.toUTCString() + "; path=/";
    // document.cookie = `user_id=${"gusdnr205@naver.com"}; expires=` + expireDate.toUTCString() + "; path=/";

    console.log(document.cookie);
    let start = document.cookie.indexOf(`user_id=`);

    if (start != -1) {
        userId = document.cookie.split('=')[1];
    }
    return userId;
}