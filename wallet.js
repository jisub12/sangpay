
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

// ------------------------------------------------------

// // 로그인 성공 시, 로컬 스토리지에서 Bitcoin 수량 가져오기
// function getBitcoinAmount(userId) {
//   const userKey = "user_" + userId;
//   const userData = JSON.parse(localStorage.getItem(userKey));
//   return userData.token.amount;
// }

// // Bitcoin 수량을 wallet에 표시하기
// function displayBitcoinAmount(userId) {
//   const bitcoinAmount = getBitcoinAmount(userId);
//   const tokenAmountElement = document.querySelector(".token-amount");
//   tokenAmountElement.textContent = bitcoinAmount.toFixed(4);
// }

// // loginUser 함수 수정: 로그인 성공 시, Bitcoin 수량 표시하기
// function loginUser(id, pw) {
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     if (key.startsWith("user_")) {
//       let currentUser = JSON.parse(localStorage.getItem(key));
//       console.log(currentUser.user_id);
//       console.log(currentUser.user_pw);
//       if (pw == currentUser.user_pw && id == currentUser.user_id && currentUser.user_allow == true) {
//         console.log("로그인 성공");
//         displayBitcoinAmount(currentUser.user_id);
//       }
//     }
//   }
// }
let popupSwap2 = document.querySelector(".popup-swap2");
let swapBtn2 = document.querySelector(".swap-btn2");

swapBtn2.onclick = function(){
    popupSwap2.style.display = "flex";
}


let swapExecute2 = document.querySelector(".swap-execute2");

swapExecute2.onclick = function(){
    popupSwap2.style.display = "none";
};

// // 교환 버튼 클릭 이벤트
// document.querySelector('.exchange-btn').addEventListener('click', () => {
//     openPopup('exchange-popup');
//   });
  
//   // 토큰교환 버튼 클릭 이벤트
//   document.querySelector('.token-exchange-btn').addEventListener('click', () => {
//     closePopup('exchange-popup');
//     openPopup('swap-popup');
//   });
  
//   // 페이교환 버튼 클릭 이벤트
//   document.querySelector('.pay-exchange-btn').addEventListener('click', () => {
//     closePopup('exchange-popup');
//     openPopup('swap-popup2');
//   });

let exchangeBtn = document.querySelector('.exchange-btn');
let popupExchange = document.querySelector('.popup-exchange');

exchangeBtn.onclick = function(){
    popupExchange.style.display = "flex";
    console.log(exchangeBtn);
}

let exchangeCloseBtn = document.querySelector('.exchange-close-button');

exchangeCloseBtn.onclick = function(){
    popupExchange.style.display = "none";
}

  
// sangpay 함수 부분

// 상장페이 정보를 HTML 요소에 연결
function updateSangpayInfo(){
    document.getElementById("sangpay-name").innerText = defaultCoin.coin_name;
    document.getElementById("sangpay-amount").innerText = defaultCoin.coin_num.toFixed(4);
}

// 페이지 로드 시 상장페이 정보 업데이트
window.addEventListener("DOMContentLoaded", updateSangpayInfo);

