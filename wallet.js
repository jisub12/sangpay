
// 팝업 받기 부분 //

function copyAddress() {
    const el = document.createElement('textarea');
    el.value = '내 암호화폐 지갑 주소 복사';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('지갑 주소가 복사되었습니다.');
}

// let sendPopupId = document.querySelector(".send-popup");

// function openPopup(sendPopupId) {
//     document.getElementById(sendPopupId).classList.remove('popup-hidden');
// }

// function closePopup(sendPopupId) {
//     document.getElementById(sendPopupId).classList.add('popup-hidden');
// }

let popup3 = document.querySelector(".popup3");
let receiveBtn = document.querySelector(".receive-btn");
receiveBtn.onclick = function(){
    popup3.style.display = "flex";
}

let closeBtn = document.querySelector(".h-close-button");
closeBtn.onclick = function(){
    popup3.style.display = "none";
}

// let sendBtn = document.querySelector("send-btn");

// sendBtn.onclick = function(){
//     document.getElementById("send-popup").classList.remove("popup-hidden");

// }

// 팝업 보내기 부분 //

let popup1 = document.querySelector(".popup1");
let sendBtn = document.querySelector(".send-btn");
sendBtn.onclick = function(){
    popup1.style.display = "flex";
}

let closeSend = document.querySelector(".h-send-button");

closeSend.onclick = function(){
    popup1.style.display = "none";
}

// 팝업 스왑 부분 // 

let popupSwap = document.querySelector(".popup-swap");
let swapBtn = document.querySelector(".swap-btn");

swapBtn.onclick = function(){
    popupSwap.style.display = "flex";
}


let swapExecute = document.querySelector(".swap-execute");

swapExecute.onclick = function(){
    popupSwap.style.display = "none";
};

// 팝업 스왑 부분에 토큰 눌렀을 시 이벤트 //

// ul안에 li 부분 클릭 이벤트
let tokenListItems = document.querySelectorAll(".token-list li");

tokenListItems.forEach((item) => {
    item.addEventListener("click", () => {
        // 현재 클릭된 토큰이 이미 선택되어 있으면 선택을 취소.
        if(item.classList.contains("selected")){
            item.classList.remove("selected")
        } else {
            // 그렇지 않으면 이전에 선택된 토큰의 선택 상태를 제거하고,
            tokenListItems.forEach((i) => i.classList.remove("selected"));
            // 현재 클릭된 토큰의 선택 상태를 추가.
            item.classList.add("selected");
        }    
    });
});

// let tokenListItems = document.querySelectorAll(".token-list li");

// tokenListItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // 이전에 선택된 토큰의 선택 상태를 제거합니다.
//     tokenListItems.forEach((i) => i.classList.remove("selected"));
    
//     // 현재 클릭된 토큰에 선택 상태를 추가합니다.
//     item.classList.add("selected");
//   });
// });