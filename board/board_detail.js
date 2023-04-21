// 상세 게시물

// import { boardListEdit, getCurrentUser, getUserNick } from "./board.js";

window.onload = function() {
    // 출력할 게시물의 글번호
    let no = location.href.split('?')[1];

    addBtnEvent();
    render(no);
}


function addBtnEvent() {
    // 목록 버튼 누르면 게시판(게시물 목록) 페이지로 이동
    document.querySelector('.a-detail-list').addEventListener('click', function() {
        location.href = `board.html`;
    });
}


// 출력할 게시물의 정보 찾아서 페이지에 출력하는 부분
function render(no) {
    let board = JSON.parse(localStorage.getItem('board')).find(function(i){ return i.no == no;});
    console.log(board);

    document.querySelector('.a-detail-title').innerHTML = `${board.title}`;
    document.querySelector('.a-detail-user').innerHTML = `${getUserNick(board.user)}`;
    document.querySelector('.a-detail-date').innerHTML = `${board.date}`;
    document.querySelector('.a-detail-content').innerHTML = `${board.content}`.replace(/(?:\r\n|\r|\n)/g, '<br>');

    let adminAnswerAdd = document.querySelector('.a-detail-answer-add');
    let adminAnswer = document.querySelector('.a-detail-answer');

    // 현재 사용자 아이디
    let user = getCurrentUser();

    if (user == "admin") {
        // 현재 사용자가 관리자라면

        adminAnswer.style.display = "none";
        adminAnswerAdd.style.display="block";
        // 자식 textarea에 기존 답변 출력
        adminAnswerAdd.children[0].innerHTML = `${board.answer}`;

        // 답변 등록 버튼에 클릭 이벤트 추가
        // 답변 등록 누르면 해당 게시물 객체의 answer 값이 수정되도록
        adminAnswerAdd.children[1].addEventListener('click', function() {
            console.log("답변 등록");
            console.log(adminAnswerAdd.children[0].value);

            board.answer = adminAnswerAdd.children[0].value;

            try {
                // 수정/삭제 함수 실행
                boardListEdit({board:board, value:"수정"});

                // 수정완료되었다면 작동할 부분
                alert("수정완료");
            } catch (error) {
                console.log(error);
            }

        });

    } else {
        adminAnswerAdd.style.display="none";
        adminAnswer.style.display="block";
        // 자식 h3에 기존 답변 출력
        adminAnswer.children[0].innerHTML = `${board.answer}`.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }

    // 현재 사용자가 작성자와 동일하다면(이메일값으로 비교)
    if (user == board.user) {
        console.log("작성자");
        // 삭제, 수정 버튼 보여주게(삭제->확인창 띄워주고 삭제기능, 수정-> board_edit.html로 이동)
        document.querySelector('.a-detail-edit-delete').style.display = "flex";

        // 수정 버튼 클릭하면 실행될 함수
        document.querySelector('.a-detail-edit').addEventListener('click', function() {
            console.log("수정버튼");
            // edit 페이지로 이동하는 부분 추가
            location.href = `board_edit.html?${board.no}`;
        });
        // 삭제 버튼 클릭하면 실행될 함수
        document.querySelector('.a-detail-delete').addEventListener('click', function() {
            let deleteBool = confirm("삭제하시겠습니까?");
            if (deleteBool) {
                try {
                    boardListEdit({board:board, value:"삭제"});
                    // board 페이지로 이동
                    location.href = `board.html`;
                } catch (error) {
                    window.location.reload();
                }
            }
        });
    } else { // 현재 사용자가 작성자가 아니라면 삭제, 수정버튼 안보이게
        document.querySelector('.a-detail-edit-delete').style.display = "none";
    }
}
