// 게시물 목록

// --------------------
let no = 0;

// let boardList = [];
// --------------------

window.onload = function () {
    document.querySelector('.a-board-add').addEventListener('click', function () {
        location.href = `board_edit.html`;
    });

    // 게시판 출력
    render();
}

// 게시판 출력
function render() {
    let boardList = JSON.parse(window.localStorage.getItem("board"));

    boardList.forEach(function(board) {
        // board 클릭하면 상세페이지로 이동하는 부분 추가해야함

        let boardListDiv = document.querySelector('.a-board-list');
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

        no.textContent = `${board.no}`;
        title.textContent = `${board.title}`;
        user.textContent = `${board.user}`;
        date.textContent = `${board.date}`;

        ul.append(no, title, user, date);
        boardListDiv.append(ul);
    });
}


// // 페이지네이션 함수
// function paginate(list) {
//     let listLength = list.length;

//     if (listLength) {

//     }
// }




// 게시물 객체 생성자 함수
// function Board(no, title, content, user, date, answer) {
export function Board(no, title, content, user, date, answer) {
    this.no = no++;
    this.title = title;
    this.content = content;
    this.user = user;
    this.date = date;
    this.answer = answer;
}

// export { Board }

// 등록할때 배열의 마지막 객체의 no값 +1로 no 설정하기

// console.log(boardList.push(new Board("df", "df", "dfdf","dfdf", "dfdf")));
// console.log(boardList.push(new Board("df", "df", "dfdf","dfdf", "dfdf")));
// console.log(boardList.push(new Board("df", "df", "dfdf","dfdf", "dfdf")));
// console.log(boardList.push(new Board("df", "df", "dfdf","dfdf", "dfdf")));
// console.log(boardList.push(new Board("df", "df", "dfdf","dfdf", "dfdf")));

// window.localStorage.setItem("board", JSON.stringify(boardList));


// 게시물 수정,삭제(+답변등록, 답변수정) 함수
export function boardListEdit(board, value) {
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
    // 로컬스토리지.setitem(키 :board, stringify(배열))

}


// 쿠키에서 현재 사용자 아이디 가져오는 함수
export function getCurrentUser() {

    let userId="";

    // 임의로 쿠키 생성
    let expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + 100000 * 1000);
    // document.cookie = `user_id=${"gusdnr205@naver.com"}; expires=` + expireDate.toUTCString() + "; path=/";

    console.log(document.cookie);
    let start = document.cookie.indexOf(`user_id=`);

    if (start != -1) {
        userId = document.cookie.split('=')[1];
    }

    console.log(userId);

    // console.log(window.localStorage.getItem(`user_${userId}`));
    // console.log(JSON.parse(window.localStorage.getItem(`user_${userId}`)).token);

    return userId;
}
getCurrentUser();