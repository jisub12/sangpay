// let expireDate2 = new Date();
// expireDate2.setTime(expireDate2.getTime() + 1000 * 1000);
// // document.cookie = `user_id=${"gusdnr205@naver.com"}; expires=` + new Date().setTime(new Date().getTime() + 1000* 10000).toUTCString() + "; path=/";
// document.cookie =`user_id=${"gusdnr205@naver.com"}; expires=` + expireDate2.toUTCString() + "; path=/";

function getCurrentUser() {

let userId="";

// 임의로 쿠키 생성
let expireDate2 = new Date();
expireDate2.setTime(expireDate2.getTime() + 100000 * 1000);
// document.cookie = `user_id=${"gusdnr205@naver.com"}; expires=` + expireDate2.toUTCString() + "; path=/";

console.log(document.cookie);
let start = document.cookie.indexOf(`user_id=`);

if (start != -1) {
userId = document.cookie.split('=')[1];
}

console.log(userId);

let userStorage = window.localStorage.getItem(`user_${userId}`);
if (userStorage){
    console.log(JSON.parse(userStorage).token);
}

console.log(JSON.parse(window.localStorage.getItem(`user_${userId}`)));

return userId;
}
// getCurrentUser();

// // 암호화할 문자열을 지정합니다.
// const message = "Hello, world!";

//   // MD5 알고리즘을 사용하여 문자열을 암호화합니다.
//   const encrypted = CryptoJS.MD5(message).toString();

// 토큰 생성            토큰이름, 내가보유한개수, 그 토큰 1개의 가치, 최소거래량, 수수료
let bittoken=new token("bittoken",1000,10,1,0.1);
let ethtoken=new token("ethtoken",100,2,1,0.1);
let dogetoken=new token("dogetoken",1000,2,1,0.1);
let ahyeontoken=new token("ahyeontoken",0,2,1,0.1);
let byungjutoken=new token("byungjutoken",0,2,1,0.1);
let hyunuktoken=new token("hyunuktoken",0,2,1,0.1);
let jisubtoken=new token("jisubtoken",0,2,1,0.1);
let javascripttoken=new token("javascripttoken",0,2,1,0.1);
let csstoken=new token("csstoken",0,2,1,0.1);
let htmltoken=new token("htmltoken",0,2,1,0.1);

// 로컬 스토리지에 아이디값 임의로 생성해서 저장 - 스왑 실험용 //
let userEmail = "gusdnr205@naver.com";
let tokenArr = [bittoken, ethtoken, dogetoken, ahyeontoken, byungjutoken, hyunuktoken, jisubtoken,
             ,javascripttoken, csstoken, htmltoken];
const defaultCoin = new coin("sangpay",1000,10);




// let userTokenData = {
//     user_id : userEmail,
//     sangpaycoin : defaultCoin,
//     tokens : tokenArr
//   };

// window.localStorage.setItem("userTokenData", JSON.stringify(userTokenData));
// // window.localStorage.setItem("token", JSON.stringify(tokenArr));
// let storedData = JSON.parse(window.localStorage.getItem("userTokenData"));
// // 예를 들어, bittoken의 값을 10으로 변경하려면
// // storedData.tokens[0].value = 1000;
// window.localStorage.setItem("userTokenData", JSON.stringify(storedData));




// 결과를 출력합니다.
function user(user_id,user_pw,user_nickName,user_allow=false,coin,token){
  this.user_id=user_id;
  this.user_pw=user_pw;
  this.user_nickName=user_nickName;
  this.user_allow=user_allow;
  this.user_Hash= CryptoJS.MD5(this.user_id).toString();
  this.coin=coin;
  this.token=new Array(10);
  this.token[0]=bittoken;
  this.token[1]=ethtoken;
  this.token[2]=dogetoken;
  this.token[3]=ahyeontoken;
  this.token[4]=byungjutoken;
  this.token[5]=hyunuktoken;
  this.token[6]=jisubtoken;
  this.token[7]=javascripttoken;
  this.token[8]=csstoken;
  this.token[9]=htmltoken;
}


//            코인 이름 , 내가보유한개수 , 코인 1개의 가치

function coin(coin_name,coin_num,coin_value){
  this.coin_name=coin_name;
  this.coin_num=coin_num;
  this.coin_value=coin_value
}

//                토큰이름, 내가보유한개수, 그 토큰 1개의 가치, 수수료
function token(token_name,token_num,token_value,charge){
  this.token_name=token_name;
  this.token_num=token_num
  this.token_value=token_value;
  this.charge=charge;
}





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

let popup3 = document.querySelector(".popup3");
let receiveBtn = document.querySelector(".receive-btn");
receiveBtn.onclick = function(){
    popup3.style.display = "flex";
}

let closeBtn = document.querySelector(".h-close-button");
closeBtn.onclick = function(){
    popup3.style.display = "none";
}

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

// 페이 to 토큰 버튼 클릭 이벤트
let popupSwap = document.querySelector(".popup-swap");
let swapBtn = document.querySelector(".swap-btn");

swapBtn.onclick = function(){
    popupSwap.style.display = "flex";
}


let swapExecute = document.querySelector(".swap-execute");

swapExecute.onclick = function(){
    popupSwap.style.display = "none";
};

// ------------------------------------------------------

// 토큰 to 페이 버튼 클릭 이벤트

let popupSwap2 = document.querySelector(".popup-swap2");
let swapBtn2 = document.querySelector(".swap-btn2");

swapBtn2.onclick = function(){
    popupSwap2.style.display = "flex";
}

let swapExecute2 = document.querySelector(".swap-execute2");

swapExecute2.onclick = function(){
    popupSwap2.style.display = "none";
};

// 교환 버튼 클릭 이벤트

let exchangeBtn = document.querySelector('.exchange-btn');
let popupExchange = document.querySelector('.popup-exchange');

exchangeBtn.onclick = function(){
    popupExchange.style.display = "flex";
}

let exchangeCloseBtn = document.querySelector('.exchange-close-button');

exchangeCloseBtn.onclick = function(){
    popupExchange.style.display = "none";
}


// sangpay 함수 부분

// 상장페이 정보를 HTML 요소에 연결
function updateSangpayInfo(){
    //메인 지갑 부분 연결
    document.getElementById("sangpay-name").innerText = defaultCoin.coin_name;
    document.getElementById("sangpay-amount").innerText = defaultCoin.coin_num.toFixed(4);
    document.getElementById("sangpay-value").innerText = defaultCoin.coin_value; // 적용 되는지 확인 필요;
    // 보내기 버튼 부분 연결
    document.getElementById("send-sangpay-name").innerText = defaultCoin.coin_name;
    document.getElementById("send-sangpay-amount").innerText = defaultCoin.coin_num.toFixed(4);
    // 페이 to 토큰 부분 연결
    document.getElementById("swap1-sangpay-name").innerText = defaultCoin.coin_name;
    document.getElementById("swap1-sangpay-amount").innerText = defaultCoin.coin_num.toFixed(4);
    // 토큰 to 페이 부분 연결
    document.getElementById("swap2-sangpay-name").innerText = defaultCoin.coin_name;
    document.getElementById("swap2-sangpay-amount").innerText = defaultCoin.coin_num.toFixed(4);
}

// 페이지 로드 시 상장페이 정보 업데이트
window.addEventListener("DOMContentLoaded", updateSangpayInfo);



// 토큰 목록을 생성합니다.
const tokens = [
    bittoken,
    ethtoken,
    dogetoken,
    ahyeontoken,
    byungjutoken,
    hyunuktoken,
    jisubtoken,
    javascripttoken,
    csstoken,
    htmltoken,
];

// 메인 지갑 화면에 토큰 목록을 추가하는 함수입니다.
function displayTokens() {
    const tokenList = document.getElementById("main-token-list");
    let userId = getCurrentUser();
    let userStorage = window.localStorage.getItem(`user_${userId}`);
    if(userStorage) {
        let userTokenList = JSON.parse(userStorage).token;


    // 토큰 목록을 순회하며 각 토큰에 대한 정보를 추가합니다.
    userTokenList.forEach((token) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span class="token-name">${token.token_name}</span>
        <span class="token-amount">${token.token_num.toFixed(4)}</span>
        <span class="token-value" style = "display :none;">${token.token_value.toFixed(4)}</span>
        `;
        tokenList.appendChild(listItem);

     });
}
}

// token to pay 팝업 화면에 토큰 목록을 추가하는 함수입니다.
function displayTokens2() {
    const tokenList = document.getElementById("tokentopay-token-list");

    // 토큰 목록을 순회하며 각 토큰에 대한 정보를 추가합니다.
    tokens.forEach((token) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span class="token-name">${token.token_name}</span>
        <span class="token-amount" style = "display : none;">${token.token_num.toFixed(4)}</span>
        <span class="token-value" style = "display :none;">${token.token_value.toFixed(4)}</span>
        `;
        tokenList.appendChild(listItem);
    });
    // console.log(displayTokens2);
}

// 김아현-----
// pay to token
function payToTk(token_name) {
  let amount = document.querySelector('#swap2-token-amount');

  console.log("dfsdfsfdfsd",amount.value);
  console.log("sdfd", token_name);

  // 토큰이름에 해당하는 토큰 찾아서 정보 출력
  let token2List = JSON.parse(window.localStorage.getItem('token'));
  console.log(token2List);

  let token = token2List.filter(function(item) {
    return item.token_name == token_name;
  })[0];

  let swapRate = document.querySelectorAll('.swap-rate');
  let swapFee = document.querySelectorAll('.swap-fee');

  swapRate[0].innerHTML = `교환비율 : ${token.token_value}`;
  swapRate[1].innerHTML = `교환비율 : ${token.token_value}`;
  swapFee[0].innerHTML = `수수료 : ${token.charge}`;
  swapFee[1].innerHTML = `수수료 : ${token.charge}`;

  console.log(swapRate);
}


// 로컬 스토리지에 저장할 토큰
function token2(token_name, token_value, charge) {
  this.token_name=token_name;
  this.token_value=token_value;
  this.charge=charge;
}

// 임의로 토큰 목록 로컬에 저장
function setTokenLocal() {
  let token2List = [];
  for (let i = 0; i < tokens.length; i++) {
     token2List.push(new token2(tokens[i].token_name, 2, 1));
  }
  console.log(token2List);
  // 로컬 스토리지에 토큰 정보 저장
  window.localStorage.setItem('token', JSON.stringify(token2List));
}


// ---------------------------

// pay to token 팝업 화면에 토큰 목록을 추가하는 함수입니다.
function displayTokens3() {
    const tokenList = document.getElementById("paytotoken-token-list");
    // 토큰 목록을 순회하며 각 토큰에 대한 정보를 추가합니다.
    tokens.forEach((token) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <span class="token-name">${token.token_name}</span>
        <span class="token-amount" style = "display : none";>${token.token_num.toFixed(4)}</span>
        <span class="token-value" style = "display :none;">${token.token_value.toFixed(4)}</span>
        `;
      tokenList.appendChild(listItem);
    });
}

// ul안에 li 부분 클릭 이벤트

function addClickListeners() {
    let tokenListItems = document.querySelectorAll(".token-list li");

tokenListItems.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("클릭 이벤트가 발생했습니다.");
        // 현재 클릭된 토큰이 이미 선택되어 있으면 선택을 취소.
        if(item.classList.contains("selected")){
            item.classList.remove("selected")
        } else {
            // 그렇지 않으면 이전에 선택된 토큰의 선택 상태를 제거하고,
            tokenListItems.forEach((i) => i.classList.remove("selected"));
            // 현재 클릭된 토큰의 선택 상태를 추가.
            item.classList.add("selected");

            // 현재 클릭된 토큰의 이름 전달
            payToTk(item.firstElementChild.textContent);
        }
    });
});
}

// 페이지 로드 시 토큰 목록을 표시합니다.

window.addEventListener("DOMContentLoaded", () => {
    displayTokens("main-token-list");
    displayTokens2("tokentopay-token-list");
    displayTokens3("paytotoken-token-list");

    // li 클릭 부분 이벤트 함수 추가
    addClickListeners();

    // 임의로 로컬스토리지에 토큰 추가
    setTokenLocal();
});



// 로컬스토리지 아이디 연결 (sangpay)

function getCurrentUser() {
    return "gusdnr205@naver.com"; // 현재 사용자를 반환하는 코드를 적절하게 수정해주세요.
  }

  function getSangpayForUser(user) {
    const storedSangpay = parseFloat(localStorage.getItem(user));

    if (isNaN(storedSangpay)) {
      // 초기 잔액 설정
      const initialSangpay = 1000;
      localStorage.setItem(user, initialSangpay);
      return initialSangpay;
    } else {
      return storedSangpay;
    }
  }

  function saveWalletToLocalStorage(email, sangpayAmount) {
    localStorage.setItem(`user_${email}`, sangpayAmount);
    console.log(sangpayAmount);
  }

  function loadWalletFromLocalStorage(email) {
    const storedData = localStorage.getItem(`user_${email}`);
    console.log( JSON.parse( storedData).coin.coin_num);

    return storedData === null ? 0 : parseFloat(JSON.parse(storedData).coin.coin_num);
  }


  // 보내기 기능 구현

  // document.querySelector(".h-send-button").addEventListener("click", () => {
  //   const amountToSend = parseFloat(document.querySelector("#send-amount").value);

  //   if (isNaN(amountToSend) || amountToSend <= 0) {
  //     alert("올바른 개수를 입력하세요.");
  //   } else {
  //     const currentUser = getCurrentUser();
  //     const storedSangpay = getSangpayForUser(currentUser);

  //     if (amountToSend > storedSangpay) {
  //       alert("잔액이 부족합니다.");
  //     } else {
  //       const updatedSangpay = (storedSangpay - amountToSend).toFixed(4);
  //       localStorage.setItem(currentUser,updatedSangpay);

  //       document.querySelectorAll(".coin-amount").forEach(function(e) {
  //         e.textContent = updatedSangpay;
  //       });
  //       document.querySelector("#send-amount").value = "";
  //       document.querySelector(".popup1").style.display = "none";
  //     }
  //   }
  // });

  document.querySelector(".h-send-button").addEventListener("click", () => {
    const amountToSend = parseFloat(document.querySelector("#send-amount").value);

    if (isNaN(amountToSend) || amountToSend <= 0) {
      alert("올바른 개수를 입력하세요.");
    } else {
      const currentUser = getCurrentUser();
      const storedSangpay = loadWalletFromLocalStorage(currentUser); // 변경된 부분

      if (amountToSend > storedSangpay) {
        alert("잔액이 부족합니다.");
      } else {
        const updatedSangpay = (storedSangpay - amountToSend).toFixed(4);


        // saveWalletToLocalStorage(currentUser, JSON.stringify(user)); // 변경된 부분

        // 김아현------
        // 보낼 개수, 현재사용자 변경된 개수
        editUserSangpay(amountToSend, updatedSangpay);

        console.log(storedSangpay);
        console.log(updatedSangpay);
        document.querySelectorAll(".coin-amount").forEach(function (e) {
          e.textContent = updatedSangpay;
        });
        document.querySelector("#send-amount").value = "";
        document.querySelector(".popup1").style.display = "none";
      }
    }
  });

  // 김아현-----------

  // 보내기 버튼 눌렀을때, 입력한 주소값이 유효한지 확인하고
  // 받는 사용자의 sangpay값 수정하는 부분
  function editUserSangpay(amountToSend, updatedSangpay) {
    let inputHash = document.querySelector("#send-address").value;
    console.log(inputHash);


    // 승인 회원 목록
    let userList = getUserList();

    // 받는 회원
    let user = userList.filter(function(item) {
      console.log("sdfs", item.user_Hash);
      return item.user_Hash == inputHash;
    })[0];

    if (user) {
      // 받는 회원, 현재 사용자가 같으면 안되게
      if (user.user_id == getCurrentUser()) {
        alert("받는 회원, 현재 사용자가 같음");
        console.log("받는 회원, 현재 사용자가 같음");
      } else {
        // 받는 회원, 현재 사용자가 다름--> 보내기 기능 정상 작동

        // 현재 회원 정보
        let currentUser = JSON.parse(window.localStorage.getItem("user_"+getCurrentUser()));
        currentUser.coin.coin_num = Number(updatedSangpay); // 현재 회원의 sangpay 값 변경

        localStorage.setItem("user_"+getCurrentUser(), JSON.stringify(currentUser));

        // 받는 회원의 sangpay 값 변경
        user.coin.coin_num += amountToSend;
        localStorage.setItem("user_"+user.user_id, JSON.stringify(user));

        alert(user.user_id + "님께 " + amountToSend + "만큼 보냈습니다.");

      }

      console.log("받는회원",user);

    }

  }

  // 전체 회원 목록 반환하는 함수(승인회원)
  function getUserList() {
    let userList = [];

    for (let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i);
        let user = JSON.parse(window.localStorage.getItem(key));
        if (key.startsWith("user_") && user.user_allow == true) {
            userList.push(JSON.parse(window.localStorage.getItem(key)));
        };
    }
    console.log("승인회원목록", userList);
    return userList;
  }