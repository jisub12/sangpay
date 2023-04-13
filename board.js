// 게시물 목록

// --------------------
let no = 0;

// let boardList = [];
// --------------------

window.onload = function() {
    document.querySelector('.a-board-add').addEventListener('click',function() {
        location.href = `board_edit.html`;
    });
}


// 게시물 객체 생성자 함수
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




// 게시물객체 여럿 들어있는 배열 만들어서
// 로컬스토리지.setitem(키 :board, stringify(배열))

// getitem(키)
// parse(배열).push(추가할 배열 객체)
//

// 수정
// parse(배열) << 배열 수정하고
// 로컬스토리지.setitem(키 :board, stringify(배열))

// 삭제도 동일(splice)


// 게시물 수정,삭제(+답변등록, 답변수정) 함수
export function boardListEdit(board, value) {
    console.log("게시물수정삭제함수")
    console.log(board);
    console.log(value);

    let boardList = JSON.parse(localStorage.getItem('board'));
    let idx = boardList.findIndex(function(item) { return item.no == board.no });

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