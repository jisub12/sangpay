// 게시물 목록

// 한 페이지에 보여줄 게시물 개수
let count = 5;
let currentPage = 1;

// 처음 실행되면 작동할 함수
window.onload = function () {

    // 로그인 안했다면
    if (!getCurrentUser()) {
        alert("로그인 하세요");
        location.href = '../login/loginpage.html';
    }

    // 페이지네이션 함수 실행
    paginate(JSON.parse(window.localStorage.getItem("board")));

    // 처음 실행했을때 1번 페이지가 표시되게
    render(0, currentPage * count - 1, 1);

    addBtnEvent();
}


// 페이지네이션 함수(출력할 리스트를 매개변수로 받음)
function paginate(list) {
    if (!list) {
        window.localStorage.setItem('board', JSON.stringify([]));
        list = JSON.parse(window.localStorage.getItem('board'));
    }

    let listLength = list.length;

    // 페이지 번호를 표시해줄 div
    let pageNumDiv = document.querySelector('.a-board-pagenum');

    // 총 페이지 개수 구하는
    let totalPage = Math.ceil(listLength / count);

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
        numbtnLabel.setAttribute("class", "b-pagination-num");

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
    if (end >= boardList.length) {
        end = boardList.length - 1;
    }

    let boardListDiv = document.querySelector('.a-board-list');
    if (!boardListDiv) {
        return false;
    }
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

    no.style.border = "1px solid";
    no.style.backgroundColor = "lightgray";

    title.style.borderTop = "1px solid";
    title.style.borderRight = "1px solid";
    title.style.borderBottom = "1px solid";
    title.style.backgroundColor = "lightgray";

    user.style.borderTop = "1px solid";
    user.style.borderRight = "1px solid";
    user.style.borderBottom = "1px solid";
    user.style.backgroundColor = "lightgray";

    date.style.borderTop = "1px solid";
    date.style.borderRight = "1px solid";
    date.style.borderBottom = "1px solid";
    date.style.backgroundColor = "lightgray";

    ul.append(no, title, user, date);
    boardListDiv.append(ul);

    if (boardList.length != 0) {
        // 가장 최근 게시물이 먼저 출력되게
        boardList.reverse();

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

            let nick = getUserNick(board.user);

            no.textContent = `${i + 1}`;
            title.textContent = `${board.title}`;
            user.textContent = `${nick}`;
            date.textContent = `${board.date}`.slice(0, 10);

            no.style.borderRight = "1px dashed";

            title.style.borderRight = "1px dashed";

            user.style.borderRight = "1px dashed";

            title.addEventListener("click", function () {
                location.href = `board_detail.html?${board.no}`;
            });

            ul.append(no, title, user, date);
            boardListDiv.append(ul);
        }

        // 이전/다음 버튼 설정
        pageBtnRender(boardList.length, pagenum);

    }
}

function pageBtnRender(listLength, pagenum) { // 페이지 이전/다음 버튼 display값 설정
    let totalPage = Math.ceil(listLength / count);

    let nextBtn = document.querySelector("#nextBtn");
    let prevBtn = document.querySelector("#prevBtn");

    nextBtn.style.visibility = "visible";
    prevBtn.style.visibility = "visible";

    // 현재 첫번째 페이지라면 이전 버튼 출력 X
    if (pagenum == 1) {
        prevBtn.style.visibility = "hidden";
    }
    // 현재 마지막 페이지라면 다음 버튼 출력 X
    if (pagenum == totalPage) {
        nextBtn.style.visibility = "hidden";
    }

    // 현재 페이지로 체크되게
    document.querySelector(`.numbtn-${pagenum}`).checked = "checked";
}

// 회원 아이디로 닉네임 찾는 함수
function getUserNick(userId) {
    let nick = "";
    if (userId != "admin") {
        nick = JSON.parse(window.localStorage.getItem("user_" + userId)).user_nickName;
    } else {
        nick = userId;
    }
    return nick;
}
