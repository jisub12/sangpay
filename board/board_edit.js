// 게시물 등록/수정

// 하려고 하는게 등록인지 수정인지 확인
// 등록/수정에 따라 버튼에 등록/수정 작성
// 등록이면 빈 화면 출력, 수정이면 이미 작성되어있는 내용 출력

// 처음 실행될때 작동할 함수
window.onload = function () {
    // 출력할 게시물의 글번호
    let currentNo = location.href.split('?')[1];
    let user = getCurrentUser();
    let userInfo = JSON.parse(window.localStorage.getItem("user_" + getCurrentUser()));

    // 현재 로그인한 사용자인지 확인
    if (user && userInfo && userInfo.user_allow || user == "admin") { // 로그인했다면

        if (currentNo) {
            //수정페이지
            let board = JSON.parse(window.localStorage.getItem("board")).filter(function (board) {
                return board.no == currentNo;
            })[0];

            // 현재 작성자가 지금 게시물의 작성자인지 확인
            if (user == board.user || user == "admin") {
                // 수정 권한 있음

                // 이미 등록된 게시물 정보 출력
                document.querySelector("#title").value = `${board.title}`;
                document.querySelector("#content").innerHTML = `${board.content}`;
                document.querySelector(".a-edit-submit").innerHTML = "수정";

                // 페이지 제목&버튼 수정으로 변경, 등록이벤트 --> 수정하는 이벤트로 변경
                addBtnEvent(true, board);

            } else {
                alert("권한없음");
                location.href = `board_detail.html?${currentNo}`;
            }
            // 아니면 지금 게시물 상세페이지로 이동
        } else {
            // 등록페이지
            addBtnEvent(false);
        }

    } else { //아니면 로그인페이지로 이동
        alert("로그인하세요");
        location.href = '../login/loginpage.html';

    }

}


function addBtnEvent(editBool, board = null) {

    // 등록/수정 버튼 클릭할때 이벤트 함수 추가
    // 수정버튼
    if (editBool) {
        document.querySelector('.a-edit-submit').addEventListener('click', function () {
            edit(board);
        });
    } else {
        // 등록버튼
        document.querySelector('.a-edit-submit').addEventListener('click', function () {
            post();
        });
    }

    // 목록 버튼 클릭할때
    document.querySelector('.a-edit-list').addEventListener('click', function () {
        location.href = `board.html`;
    });
}

// 게시물 등록 부분

//  등록 버튼 클릭할때 작동하는 함수
function post() {
    let no;
    let boardList = JSON.parse(window.localStorage.getItem("board"));
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;
    let date = getdate();

    // 쿠키에서 현재 사용자 정보 받아오기
    let user = getCurrentUser();

    // 제목 내용 공란인지 확인
    let isnotblank = isNotBlank(title, content);
    if (!user) {
        alert("로그인하세요.");

        //목록페이지로 이동
        location.href = `board.html`;
    } else if (!isnotblank) {
        alert("제목 내용 공란인지 확인");

    } else {
        // 만약 게시판에 아무런 게시물도 등록되지 않았다면 no 0
        if (boardList.length == 0) {
            no = 0;
        } else {
            // 가장 마지막 게시물의 글번호 +1
            // 로컬 스토리지에서 가장 마지막 게시물 번호 정보를 가져와서 적용
            no = parseInt(window.localStorage.getItem("lastBoardNo")) + 1;
        }

        try {
            boardList.push(new Board(no, title, content, user, date, ""));
            window.localStorage.setItem("lastBoardNo", no);
            // 게시물 로컬스토리지에 추가
            window.localStorage.setItem("board", JSON.stringify(boardList));
            alert("작성되었습니다.");

            //등록 완료되면 방금 등록한 게시물의 상세 페이지로 넘어가기
            location.href = `board_detail.html?${no}`;
        } catch (error) {
            alert("문제가 생겼습니다.");
        }
    }
}

// 수정 버튼 눌렀을때 동작하는 함수
function edit(board) {
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content').value;
    let date = getdate();
    board.title = title;
    board.content = content;
    board.date = date;

    if (isNotBlank(title, content)) {
        boardListEdit({ board: board, value: "수정" });
        alert("수정되었습니다.");
        //  //수정 완료되면 방금 수정한 게시물의 상세 페이지로 넘어가기
        location.href = `board_detail.html?${board.no}`;

    } else {
        alert("제목내용 공란인지 확인");
    }


}

// 제목 내용 공란인지 확인
function isNotBlank(title, content) {
    if (title.trim() == "" || content.trim() == "") {
        return false;
    } else {
        return true;
    }
}

// 현재 날짜 시간 문자열로 반환하는 함수
function getdate() {
    return new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().replace('T', ' ').slice(0, -5);
}