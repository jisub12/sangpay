

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
console.log(window.localStorage.key(0));
console.log(window.localStorage.getItem(window.localStorage.key(0)));

let memberArr = [];
let waitingMemberArr = [];
// console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(0))));
// let testObj = JSON.parse(window.localStorage.getItem(window.localStorage.key(0)));
// console.log(testObj);
// console.log(testObj["user_allow"]);
// testObj["user_allow"] = true;
// console.log(testObj["user_allow"]);
// console.log(testObj);

// console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(0)))["user_allow"]);
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


let waitingMember = JSON.parse(window.localStorage.getItem(window.localStorage.key(0)));
let waitingMember2 = JSON.parse(window.localStorage.getItem(window.localStorage.key(1)));
console.log(waitingMember);
console.log(waitingMember2);

function addWaitingList(){
    waitingMemberArr.push(waitingMember);
    waitingMemberArr.push(waitingMember2);
    console.log(waitingMemberArr);
    renderWaitingList();
}
addWaitingList();

function renderWaitingList(){
    confirmWaitingMember.innerHTML = "";
    
    waitingMemberArr.forEach(function(item,index){
        let div01 = document.createElement("div");
        let div02 = document.createElement("div");
        let div03 = document.createElement("div");
        let button01 = document.createElement("button");

        button01.innerHTML = "승인";

        button01.onclick = function(){
            div01.remove();
            let oneByOne = waitingMemberArr.splice(index,1);
            waitingMemberArr.splice(index,1);
            renderWaitingList();
            oneByOne["user_allow"] = true;
            // console.log(waitingMember[index]);
            memberArr.push(oneByOne);
            renderMemberList();
        }

        div02.innerHTML = "아이디 : " + waitingMemberArr[index].user_id;
        div03.innerHTML = "닉네임 : " + waitingMemberArr[index].user_nickName;

        div01.style.display = "flex";
        div01.className = "board-content";
        div01.append(div02,div03,button01);
        confirmWaitingMember.append(div01);
    })
}

function renderMemberList(){
    member.innerHTML = "";

    memberArr.forEach(function(item,index){
        let div01 = document.createElement("div");
        let div02 = document.createElement("div");
        let div03 = document.createElement("div");

        div02.innerHTML = "아이디 : " + memberArr[index].user_id;
        div03.innerHTML = "닉네임 : " + memberArr[index].user_nickName;

        div01.style.display = "flex";
        div01.className = "board-content";
        div01.append(div02,div03);
        member.append(div01);
    })
}