// 게시물 등록/수정

// 하려고 하는게 등록인지 수정인지 확인
// 등록/수정에 따라 버튼에 등록/수정 작성
// 등록이면 빈 화면 출력, 수정이면 이미 작성되어있는 내용 출력

import { Board, getCurrentUser } from "./board.js";

// 처음 실행될때 작동할 함수
window.onload = function() {

    // 작성하기 버튼 클릭할때 이벤트 함수 추가
    document.querySelector('.a-edit-submit').addEventListener('click', function() {
        post();
    });

}


// 게시물 등록 부분

//  등록 버튼 클릭할때 작동하는 함수
function post() {
    let no;
    let boardList = JSON.parse(window.localStorage.getItem("board"));

    console.log(boardList);

    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;
    let date = getdate();
    console.log(date);

    // 쿠키에서 현재 사용자 정보 받아오기
    let user = getCurrentUser();
    if (!user) {
        alert("로그인하세요.");
        // 로그인 페이지로 이동하는 부분 추가해야함
    }

    // 만약 게시판에 아무런 게시물도 등록되지 않았다면 no 0
    if (!boardList) {
        no = 0;
    } else {
        // 가장 마지막 게시물의 글번호 +1
        no = boardList[boardList.length-1].no + 1;
    }

    try {
        boardList.push(new Board(no, title, content, user, date,""));
        // 게시물 로컬스토리지에 추가
        window.localStorage.setItem("board", JSON.stringify(boardList));
        alert("작성되었습니다.");

        //등록 완료되면 방금 등록한 게시물의 상세 페이지로 넘어가기
        location.href = `board_detail.html?${no}`;
    } catch (error) {
        console.log(error);
        alert(error);
    }

}

// 현재 날짜 시간 문자열로 반환하는 함수
function getdate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}