// ---김아현---

// import { paginate } from "./board";

// paginate();

let start = 0;
let end = window.localStorage.length;
console.log(end);

// 첫 페이지가 승인된 회원 목록이라면
let allow = true;


// 전체 회원 목록 반환하는 함수(승인회원+승인대기회원)
function getUserList() {
    let userList = [];

    for (let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i);
        if (key.startsWith("user_")) {
            userList.push(JSON.parse(window.localStorage.getItem(key)));
        };
    }
    console.log("승인회원+승인대기회원목록", userList);
    return userList;
}

// --------------------------


// if(user_allow === false){

// }else{

// }

// let testItem = window.localStorage.getItem("user");
// console.log(testItem);
// let testItemSplit = testItem.split(",");
// console.log(testItemSplit);
// console.log(JSON.parse(testItem).user_nickName);
// console.log(JSON.parse(testItem).user_id);

let member = document.querySelector(".b-member-board");
let confirmWaitingMember = document.querySelector(".b-confirm-waiting-member-board");
// console.log(window.localStorage.key(0));
// console.log(window.localStorage.getItem(window.localStorage.key(0)));

let memberArr = [];
let waitingMemberArr = [];
// console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(0))));
// let testObj = JSON.parse(window.localStorage.getItem(window.localStorage.key(0)));
// console.log(testObj);
// console.log(testObj["user_allow"]);
// testObj["user_allow"] = true;
// console.log(testObj["user_allow"]);
// console.log(testObj);
// console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(0))));
// let testObj2 = JSON.parse(window.localStorage.getItem(window.localStorage.key(0)));
// console.log(testObj2);
// testObj2["user_allow"] = true;
// console.log(testObj2);
// console.log(`${testObj2}`);
// console.log(testObj2.user_id);
// window.localStorage.setItem("user_" + testObj2.user_id, JSON.stringify(testObj2));
// window.localStorage.setItem("user_" + testObj2.user_id,testObj2);
// console.log(window.localStorage.valueOf(0));
// JSON.parse(window.localStorage.getItem(window.localStorage.key(0)))["user_allow"] = true;
// console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(0))));
// console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(0))).user_allow);
// console.log(Object.values(JSON.parse(window.localStorage.getItem(window.localStorage.key(0)))));
// console.log(Object.values(JSON.parse(window.localStorage.getItem(window.localStorage.key(0))))[3]);


// function renderMemberList(){
//     member.innerHTML = "";

//     divList = document.createElement("div");
//     divID = document.createElement("div");
//     divNickname = document.createElement("div");
//     divConfirm = document.createElement("div");

//     divID.innerHTML = "아이디";
//     divID.style.border = "1px solid";
//     divID.style.backgroundColor = "lightblue";
//     divID.style.width = "45%";
//     divID.style.height = "30px";
//     divID.style.display = "flex";
//     divID.style.justifyContent = "center";
//     divID.style.alignItems = "center";

//     divNickname.innerHTML = "닉네임";
//     divNickname.style.borderTop = "1px solid";
//     divNickname.style.borderRight = "1px solid";
//     divNickname.style.borderBottom = "1px solid";
//     divNickname.style.backgroundColor = "lightblue";
//     divNickname.style.width = "45%";
//     divNickname.style.height = "30px";
//     divNickname.style.display = "flex";
//     divNickname.style.justifyContent = "center";
//     divNickname.style.alignItems = "center";

//     divList.style.display = "flex";
//     divList.append(divID,divNickname);

//     for(i = 0; i < window.localStorage.length; i++){
//         divList = document.createElement("div");
//         divID = document.createElement("div");
//         divNickname = document.createElement("div");
//         divConfirm = document.createElement("div");
//         confirmBtn = document.createElement("button");

//         divID.innerHTML = JSON.parse(window.localStorage.getItem(window.localStorage.key(i))).user_id;
//         divID.style.borderLeft = "1px solid";
//         divID.style.borderBottom = "1px solid";
//         divID.style.borderRight = "1px solid";
//         divID.style.width = "45%";
//         divID.style.height = "30px";
//         divID.style.display = "flex";
//         divID.style.justifyContent = "center";
//         divID.style.alignItems = "center";

//         divNickname.innerHTML = JSON.parse(window.localStorage.getItem(window.localStorage.key(i))).user_nickName;
//         divNickname.style.borderBottom = "1px solid";
//         divNickname.style.borderRight = "1px solid";
//         divNickname.style.width = "45%";
//         divNickname.style.height = "30px";
//         divNickname.style.display = "flex";
//         divNickname.style.justifyContent = "center";
//         divNickname.style.alignItems = "center";

//         // confirmBtn.innerHTML = "승인";
//         // confirmBtn.style.width = "40px";
//         // confirmBtn.style.margin = "auto";

//         // confirmBtn.onclick = function(){
//         //     window.localStorage.setItem(Object.keys(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))[3],true);
//         // }

//         // divConfirm.innerHTML = confirmBtn;
//         // divConfirm.style.borderBottom = "1px solid";
//         // divConfirm.style.borderRight = "1px solid";
//         // divConfirm.style.width = "10%";
//         // divConfirm.style.height = "30px";

//         divList.style.display = "flex";
//         divList.append(divID,divNickname);
//     }
//     member.append(divList);
// }
// // renderMemberList();

// function renderWaitingList(){
//     // let jason = window.localStorage.getItem(window);
//     // console.log(jason);
//     // jason = jason.split("|");
//     // console.log(jason);
//     confirmWaitingMember.innerHTML = "";

//     divList = document.createElement("div");
//     divID = document.createElement("div");
//     divNickname = document.createElement("div");
//     // divConfirm = document.createElement("div");

//     divID.innerHTML = "아이디";
//     divID.style.border = "1px solid";
//     divID.style.backgroundColor = "lightblue";
//     divID.style.width = "200px";
//     divID.style.height = "30px";
//     divID.style.display = "flex";
//     divID.style.justifyContent = "center";
//     divID.style.alignItems = "center";

//     divNickname.innerHTML = "닉네임";
//     divNickname.style.borderTop = "1px solid";
//     divNickname.style.borderRight = "1px solid";
//     divNickname.style.borderBottom = "1px solid";
//     divNickname.style.backgroundColor = "lightblue";
//     divNickname.style.width = "200px";
//     divNickname.style.height = "30px";
//     divNickname.style.display = "flex";
//     divNickname.style.justifyContent = "center";
//     divNickname.style.alignItems = "center";

//     // divConfirm.innerHTML = "승인";
//     // divConfirm.style.borderTop = "1px solid";
//     // divConfirm.style.borderRight = "1px solid";
//     // divConfirm.style.borderBottom = "1px solid";
//     // divConfirm.style.backgroundColor = "lightblue";
//     // divConfirm.style.width = "10%";
//     // divConfirm.style.height = "30px";

//     divList.style.display = "flex";
//     divList.append(divID,divNickname);

//     for(i = 0; i < window.localStorage.length; i++){
//         divList = document.createElement("div")
//         divID = document.createElement("div");
//         divNickname = document.createElement("div");
//         divConfirm = document.createElement("div");
//         confirmBtn = document.createElement("button");

//         divID.innerHTML = JSON.parse(window.localStorage.getItem(window.localStorage.key(i))).user_id;
//         divID.style.borderLeft = "1px solid";
//         divID.style.borderBottom = "1px solid";
//         divID.style.borderRight = "1px solid";
//         divID.style.width = "200px";
//         divID.style.height = "30px";
//         divID.style.display = "flex";
//         divID.style.justifyContent = "center";
//         divID.style.alignItems = "center";

//         divNickname.innerHTML = JSON.parse(window.localStorage.getItem(window.localStorage.key(i))).user_nickName;
//         divNickname.style.borderBottom = "1px solid";
//         divNickname.style.borderRight = "1px solid";
//         divNickname.style.width = "200px";
//         divNickname.style.height = "30px";
//         divNickname.style.display = "flex";
//         divNickname.style.justifyContent = "center";
//         divNickname.style.alignItems = "center";

//         confirmBtn.innerHTML = "승인";
//         confirmBtn.style.width = "40px";
//         confirmBtn.style.margin = "auto";

//         let obj = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
//         // console.log(obj);
//         confirmBtn.onclick = function(){
//             obj["user_allow"] = true;
//             console.log(obj);
//             divList.remove();
//             renderMemberList();
//         }

//         // divConfirm.innerHTML = confirmBtn;
//         // divConfirm.style.borderBottom = "1px solid";
//         // divConfirm.style.borderRight = "1px solid";
//         // divConfirm.style.width = "10%";
//         // divConfirm.style.height = "30px";

//         divList.style.display = "flex";
//         divList.append(divID,divNickname,confirmBtn);
//     }
//     confirmWaitingMember.append(divList);

//     // jason.forEach(function(i){
//     //     listItem = document.createElement("li");
//     //     divDay = document.createElement("div");
//     //     divTime = document.createElement("div");
//     //     divContent = document.createElement("div");
//     //     divPlace = document.createElement("div");

//     //     divDay.innerHTML = JSON.parse(i).day;
//     //     divDay.style.borderLeft = "1px solid";
//     //     divDay.style.borderBottom = "1px solid";
//     //     divDay.style.borderRight = "1px solid";
//     //     divDay.style.width = "82px";
//     //     divDay.style.height = "50px";

//     //     divTime.innerHTML = JSON.parse(i).time;
//     //     divTime.style.borderBottom = "1px solid";
//     //     divTime.style.borderRight = "1px solid";
//     //     divTime.style.width = "82px";
//     //     divTime.style.height = "50px";

//     //     divContent.innerHTML = JSON.parse(i).content;
//     //     divContent.style.borderBottom = "1px solid";
//     //     divContent.style.borderRight = "1px solid";
//     //     divContent.style.width = "450px";
//     //     divContent.style.height = "50px";

//     //     divPlace.innerHTML = JSON.parse(i).place;
//     //     divPlace.style.borderBottom = "1px solid";
//     //     divPlace.style.borderRight = "1px solid";
//     //     divPlace.style.width = "200px";
//     //     divPlace.style.height = "50px";

//     //     listItem.style.display = "flex";
//     //     listItem.append(divDay,divTime,divContent,divPlace);
//     //     listTable.append(listItem);
//     // })
// }
// renderWaitingList();

// for(i = 0; i < window.localStorage.length; i++){
//     let obj = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
//     if(obj["user_allow"] === false){
//         console.log(obj);
//         console.log(obj["user_allow"]);
//         renderWaitingList();
//     }
// }

// for( i=0; i < window.localStorage.length; i++){
//     waitingMemberArr.push(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))));
// }
// console.log(waitingMemberArr);

// let waitingMember = JSON.parse(window.localStorage.getItem(window.localStorage.key(0)));
// let waitingMember2 = JSON.parse(window.localStorage.getItem(window.localStorage.key(1)));
// console.log(waitingMember);
// console.log(waitingMember2);

window.onload = function () {
    addList(true);
    addList(false);


    // addBtnEvent(document.querySelector('.b-member-board'));
    // addBtnEvent(document.querySelector('.b-confirm-waiting-member-board'));
    addBtnEvent(document.querySelector('.box.item1 div'));
    addBtnEvent(document.querySelector('.box.item2 div'));

    // 페이지네이션 함수 실행
    paginate(memberArr);
    paginate(waitingMemberArr);

    // 처음 실행했을때 1번 페이지가 표시되게
    // render(0, currentPage * count - 1, 1);

    renderWaitingList(allow);

}


// 탭 선택되면 allow 값 변하고, 승인회원/승인대기회원 렌더하는 이벤트 추가하는 부분
let radios = document.querySelectorAll('input[type=radio][name="tabmenu"]');
radios.forEach(function(radio) {
     radio.addEventListener('click', function() {
        if (radio.classList.contains('b-member')) {
            allow = true;
        } else {
            allow = false;
        }
        renderWaitingList(allow);
     });
    });

// ----모듈화해서 쓰고싶은 함수---

let count = 1;

let currentPage = 1;

// 페이지네이션 함수(출력할 리스트를 매개변수로 받음)
function paginate(list) {
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
            // render((i - 1) * count, end, i);
            renderWaitingList(allow);
        });
    });
}

// 이전 다음 버튼에 이벤트 추가하는 함수
function addBtnEvent(memberBoardDiv) {
    // let memberBoardDiv;
    // if (allow) {
    //     memberBoardDiv = document.querySelector('.b-member-board');
    // } else {
    //     memberBoardDiv = document.querySelector('.b-confirm-waiting-member-board');
    // }

    let pagenumDiv = document.createElement('div');
    pagenumDiv.setAttribute("class", "a-pagenum-div");
    let prevBtn =  document.createElement('div');
    prevBtn.textContent = "이전";
    prevBtn.setAttribute("id", "prevBtn");
    let boardPagenum = document.createElement('div');
    boardPagenum.setAttribute("class", "a-board-pagenum");
    let nextBtn =  document.createElement('div');
    nextBtn.textContent = "다음";
    nextBtn.setAttribute("id", "nextBtn");

    nextBtn.addEventListener('click', function () {
        if (allow) {
            goNext(memberArr.length);
        } else {
            goNext(waitingMemberArr.length);
        }
    });

    prevBtn.addEventListener('click', function () {
        goPrev();
    });

    pagenumDiv.append(prevBtn, boardPagenum, nextBtn);
    console.log(pagenumDiv);
    memberBoardDiv.append(pagenumDiv);
    console.log(memberBoardDiv);
}

// 이전 버튼 눌렀을때 작동하는 함수
function goPrev() {
    currentPage -= 1;

    let start = (currentPage - 1) * count;
    let end = currentPage * count - 1;

    // render(start, end, currentPage);
    renderWaitingList(allow);
}

// 다음 버튼 눌렀을때 작동하는 함수
function goNext(listLength) {
    currentPage += 1;

    let start = (currentPage - 1) * count;
    let end = currentPage * count - 1;

    if (end >= listLength) {
        end = listLength - 1;
    }
    // render(start, end, currentPage);
    renderWaitingList(allow);
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
    console.log(pagenum);
    document.querySelector(`.numbtn-${pagenum}`).checked = "checked";
}


// -----------------------------






// 승인회원목록, 승인대기회원 목록 수정하는 함수
function addList(allow) {
    // for(let i = 0; i < window.localStorage.length; i++){
    //     waitingMemberArr.push(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))));
    // }

    // allow 값이 true면 승인회원배열 수정
    if (allow) {
        // 전체 회원(승인회원+승인대기회원) 목록 중에서 승인회원 찾기
        memberArr = getUserList().filter(function (item) {
            console.log(item.user_allow);
            return item.user_allow == true;
        });
        console.log("승인멤버배열", memberArr);

        return memberArr;

    } else {
        // 전체 회원(승인회원+승인대기회원) 목록 중에서 승인대기회원 찾기
        waitingMemberArr = getUserList().filter(function (item) {
            console.log(item.user_allow);
            return item.user_allow == false;
        });
        console.log("대기멤버배열", waitingMemberArr);

        return waitingMemberArr;
    }

    // waitingMemberArr.push(waitingMember);
    // waitingMemberArr.push(waitingMember2);
    // console.log(waitingMemberArr);


    // renderWaitingList(start,end);
}


function renderWaitingList(allow) {
    addList(allow);

    if (allow) {

        member.innerHTML = "";

        console.log(memberArr);
        memberArr.forEach(function (item, index) {
            let div01 = document.createElement("div");
            let div02 = document.createElement("div");
            let div03 = document.createElement("div");

            div02.innerHTML = "아이디 : " + item.user_id;
            div03.innerHTML = "닉네임 : " + item.user_nickName;
            // div02.innerHTML = "아이디 : " + memberArr[index][0].user_id;
            // div03.innerHTML = "닉네임 : " + memberArr[index][0].user_nickName;

            div01.style.display = "flex";
            div01.className = "board-content";
            div01.append(div02, div03);
            member.append(div01);
        })

    } else {



    confirmWaitingMember.innerHTML = "";
    // console.log(waitingMemberArr);
    // waitingMemberArr.forEach(function(item,index){
    //     let div01 = document.createElement("div");
    //     let div02 = document.createElement("div");
    //     let div03 = document.createElement("div");
    //     let button01 = document.createElement("button");

    //     console.log(waitingMemberArr);
    //     // console.log(waitingMemberArr[index]);
    //     // console.log(waitingMemberArr.splice(index,1));

    //     button01.onclick = function(){
    //         div01.remove();
    //         let confirmedMember = waitingMemberArr.splice(index,1);
    //         // console.log(waitingMemberArr.splice(index,1));
    //         // let oneByOne = waitingMemberArr.splice(index,1);
    //         // console.log(oneByOne[0]);
    //         renderWaitingList();
    //         // let valueObj = JSON.parse(window.localStorage.getItem(window.localStorage.key(index)));
    //         // console.log(valueObj);
    //         // valueObj["user_allow"] = true;
    //         // console.log(valueObj);
    //         let valueObj = JSON.parse(window.localStorage.getItem(window.localStorage.key(index)));
    //         // for(i = 0; i < window.localStorage.length; i++){
    //         valueObj["user_allow"] = true;
    //         window.localStorage.setItem("user_" + valueObj.user_id, JSON.stringify(valueObj));
    //         // }
    //         // console.log(oneByOne[0]);
    //         // let oneByOne = waitingMemberArr.splice(index,1);
    //         memberArr.push(confirmedMember);
    //         // console.log(memberArr);
    //         renderMemberList();
    //     }
    //     button01.innerHTML = "승인";

    //     div02.innerHTML = "아이디 : " + waitingMemberArr[index].user_id;
    //     // div02.innerHTML = "아이디 : " + oneByOne[0].user_id;
    //     div03.innerHTML = "닉네임 : " + waitingMemberArr[index].user_nickName;
    //     // div03.innerHTML = "닉네임 : " + oneByOne[0].user_nickName;

    //     div01.style.display = "flex";
    //     div01.className = "board-content";
    //     div01.append(div02,div03,button01);
    //     confirmWaitingMember.append(div01);
    // })
    for (let i = 0; i < waitingMemberArr.length; i++) {
        let div01 = document.createElement("div");
        let div02 = document.createElement("div");
        let div03 = document.createElement("div");
        let button01 = document.createElement("button");

        console.log(waitingMemberArr);
        // console.log(waitingMemberArr[index]);
        // console.log(waitingMemberArr.splice(index,1));

        button01.onclick = function () {
            console.log(waitingMemberArr[i]);

            waitingMemberArr[i].user_allow = true;
            window.localStorage.setItem("user_" + waitingMemberArr[i].user_id, JSON.stringify(waitingMemberArr[i]));
            renderWaitingList();
            renderMemberList();

            // div01.remove();
            // let confirmedMember = waitingMemberArr.splice(i,1);
            // // console.log(waitingMemberArr.splice(index,1));
            // // let oneByOne = waitingMemberArr.splice(index,1);
            // // console.log(oneByOne[0]);

            // renderWaitingList();

            // // let valueObj = JSON.parse(window.localStorage.getItem(window.localStorage.key(index)));
            // // console.log(valueObj);
            // // valueObj["user_allow"] = true;
            // // console.log(valueObj);
            // let valueObj = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
            // // for(i = 0; i < window.localStorage.length; i++){
            // valueObj["user_allow"] = true;
            // window.localStorage.setItem("user_" + valueObj.user_id, JSON.stringify(valueObj));
            // // }
            // // console.log(oneByOne[0]);
            // // let oneByOne = waitingMemberArr.splice(index,1);
            // memberArr.push(confirmedMember);
            // // console.log(memberArr);
            // renderMemberList();
        }
        button01.innerHTML = "승인";

        div02.innerHTML = "아이디 : " + waitingMemberArr[i].user_id;
        // div02.innerHTML = "아이디 : " + oneByOne[0].user_id;
        div03.innerHTML = "닉네임 : " + waitingMemberArr[i].user_nickName;
        // div03.innerHTML = "닉네임 : " + oneByOne[0].user_nickName;

        div01.style.display = "flex";
        div01.className = "board-content";
        div01.append(div02, div03, button01);
        confirmWaitingMember.append(div01);
    }



}



}


function renderMemberList() {
    // addList(true);

    // member.innerHTML = "";

    // console.log(memberArr);
    // memberArr.forEach(function (item, index) {
    //     let div01 = document.createElement("div");
    //     let div02 = document.createElement("div");
    //     let div03 = document.createElement("div");

    //     div02.innerHTML = "아이디 : " + item.user_id;
    //     div03.innerHTML = "닉네임 : " + item.user_nickName;
    //     // div02.innerHTML = "아이디 : " + memberArr[index][0].user_id;
    //     // div03.innerHTML = "닉네임 : " + memberArr[index][0].user_nickName;

    //     div01.style.display = "flex";
    //     div01.className = "board-content";
    //     div01.append(div02, div03);
    //     member.append(div01);
    // })
}

