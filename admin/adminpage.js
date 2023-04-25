window.onload = function () {
    // 페이지 들어왔을때 현재사용자가 관리자가 맞는지
    if (getCurrentUser() != "admin") {
        alert("관리자 로그인 하세요");
        location.href = "../login/loginpage.html";
    } else {
        setUserList();
        renderWaitingList();
        renderMemberList();
    }
}

let member = document.querySelector(".b-member-board");
let confirmWaitingMember = document.querySelector(".b-confirm-waiting-member-board");

let memberArr = [];
let waitingMemberArr = [];

// 승인여부에 따라 승인회원/승인대기회원 배열로 회원 추가
function setUserList() {
    memberArr = [];
    waitingMemberArr = [];

    for (let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i);
        if (key.startsWith("user_")) {
            let user = JSON.parse(window.localStorage.getItem(key));
            if (user.user_allow == true) {
                memberArr.push(user);
            } else {
                waitingMemberArr.push(user);
            }
        }
    }
}


function renderWaitingList() {
    setUserList();
    confirmWaitingMember.innerHTML = "";

    waitingMemberArr.forEach(function (item, index) {
        let div01 = document.createElement("div");
        let div02 = document.createElement("div");
        let div03 = document.createElement("div");
        let button01 = document.createElement("button");

        button01.onclick = function () {

            item.user_allow = true;
            window.localStorage.setItem("user_" + item.user_id, JSON.stringify(item));
            setUserList();
            renderMemberList();
            renderWaitingList();
        }
        button01.innerHTML = "승인";
        div02.innerHTML = "아이디 : " + item.user_id;
        div03.innerHTML = "닉네임 : " + item.user_nickName;

        div01.style.display = "flex";
        div01.className = "board-content";
        div01.append(div02, div03, button01);
        confirmWaitingMember.append(div01);
    })
}



function renderMemberList() {
    setUserList();

    member.innerHTML = "";

    memberArr.forEach(function (item, index) {
        let div01 = document.createElement("div");
        let div02 = document.createElement("div");
        let div03 = document.createElement("div");

        div02.innerHTML = "아이디 : " + item.user_id;
        div03.innerHTML = "닉네임 : " + item.user_nickName;

        div01.style.display = "flex";
        div01.className = "board-content";
        div01.append(div02, div03);
        member.append(div01);
    })
}