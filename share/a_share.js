
const remainedTime = document.querySelector('.b-session');

let nowuser = ""; //로그인한 현재 유저

let bittoken = new token("bittoken", 10, 1, 0.5);  //
let ethtoken = new token("ethtoken", 10, 1, 0.5);
let dogetoken = new token("dogetoken", 10, 1, 0.5);
let ahyeontoken = new token("ahyeontoken", 10, 10, 0.5);
let byungjootoken = new token("byungjootoken", 10, 5, 0.5);
let hyunuktoken = new token("hyunuktoken", 20, 5, 0.5);
let jisubtoken = new token("jisubtoken", 10, 5, 0.5);
let spacetoken = new token("spacetoken", 10, 2, 0.5);
let numbertoken = new token("numbertoken", 10, 2, 0.5);
let overwatchtoken = new token("overwatchtoken", 10, 0.1, 0.5);

function user(user_id, user_pw, user_nickName, user_allow = false, coin, token) {
  this.user_id = user_id;
  this.user_pw = user_pw;
  this.user_nickName = user_nickName;
  this.user_allow = user_allow;
  this.user_Hash = CryptoJS.MD5(this.user_id).toString();
  this.coin = coin;
  this.token = new Array(10);
  this.token[0] = bittoken;
  this.token[1] = ethtoken;
  this.token[2] = dogetoken;
  this.token[3] = ahyeontoken;
  this.token[4] = byungjootoken;
  this.token[5] = hyunuktoken;
  this.token[6] = jisubtoken;
  this.token[7] = spacetoken;
  this.token[8] = numbertoken;
  this.token[9] = overwatchtoken;
}


//            코인 이름 , 내가보유한개수 , 코인 1개의 가치

function coin(coin_name, coin_num, coin_value) {
  this.coin_name = coin_name;
  this.coin_num = coin_num;
  this.coin_value = coin_value
}

//                토큰이름, 내가보유한개수, 그 토큰 1개의 가치, 수수료
function token(token_name, token_num, token_value, charge) {
  this.token_name = token_name;
  this.token_num = token_num
  this.token_value = token_value;
  this.charge = charge;
}


const defaultCoin = new coin("sangpay", 1000, 10);

// 현재 로그인한 사용자 아이디 반환
function getCurrentUser() {
  let userId = "";
  let start = document.cookie.indexOf(`user_id=`);

  if (start != -1) {
    userId = document.cookie.split('=')[1];
  }

  return userId;
}

function newUserBtn(
  user_id = idValue,
  user_pw = passwordValue,
  user_nickName = nicknameValue,
  user_allow,
  coin = defaultCoin,
  token
) {

  if (idpass == true && nickpass == true && pwpass == true && pwcf == true) {
    let thing = new user(
      user_id,
      user_pw,
      user_nickName,
      user_allow,
      coin,
      token
    );
    let userString = JSON.stringify(thing);
    let key = "user_" + user_id; // 고유한 저장소 키 생성
    localStorage.setItem(key, userString);
    let popup = document.querySelector('.h-welcomepopup');
    popup.classList.add("popupactive")

    idpass = false;
    nickpass = false;
    pwpass = false;
    pwcf = false;

    return userString;
  } else {
    alert("제대로 입력했는지 확인하세요.");
  }
}


let expireDate = new Date(); // 쿠키 만료 날짜
function getRemainingTime(cookieExpire) {
  let expire = new Date(cookieExpire);
  let now = new Date()
  now = now.getTime();
  let nowTime = new Date(now);
  const diff = expire - nowTime;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (diff < 2) {
    // 지울 Interval 함수 매개변수로 전달하면된다.
    clearInterval(set1);
    return "시간만료"
  }
  return `남은 시간 : ${minutes}분 ${seconds}초`;
}
let set1; //setInterval 함수
//버튼 누르면 시간추가 쿠키값에 반영


// admin 아이디, 비밀번호 로컬스토리지에 저장
window.localStorage.setItem("admin", JSON.stringify({ 'id': 'admin', 'pw': 'admin' }));
let admin = JSON.parse(window.localStorage.getItem('admin'));

function loginUser(id, pw) {
  let user;

  // id가 admin이라면
  if (id == admin.id) {
    if (pw == admin.pw) {
      // 관리자 로그인 성공
      expireDate = new Date();

      nowuser = admin;
      userLogin();
      location.href = '../admin/adminpage.html';

      return true;
    } else {
      alert('비밀번호 확인');
    }
  }

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let cuurent_user = JSON.parse(localStorage.getItem(key));
      if (id == cuurent_user.user_id) {
        user = cuurent_user;
        break;
      }
    }
  }

  if (user) {
    // 아이디 비밀번호 동일하고 승인된 회원이라면
    if (user.user_pw == pw && user.user_allow) { // 로그인 성공
      nowuser = user;
      alert("로그인에 성공하셨습니다.")
      expireDate = new Date();
      // 쿠키 생성

      userLogin();
      location.href = '../wallet/wallet.html';

    } else if (user.user_pw == pw && !user.user_allow) {
      alert("관리자의 승인을 기다리세요");
    } else {
      alert("비밀번호 틀림");
    }

  } else {
    alert("계정 없음");
  }

}

let remainingTime
let coookie1;
function userLogin() {
  expireDate.setTime(expireDate.getTime() + 60 * 1000);
  remainingTime = getRemainingTime(expireDate.toUTCString()); // 쿠키 만료까지 남은 시간 계산
  set1 = setInterval(printTime, 1000);
  localStorage.setItem('expireDate', expireDate.getTime());
  if (nowuser == admin) {
    coookie1 = document.cookie = `user_id=${nowuser.id}; expires=` + expireDate.toUTCString() + "; path=/";

  } else coookie1 = document.cookie = `user_id=${nowuser.user_id}; expires=` + expireDate.toUTCString() + "; path=/";
  function printTime() {
    remainingTime = getRemainingTime(expireDate.toUTCString()); // 쿠키 만료까지 남은 시간 계산
    remainedTime.innerHTML = remainingTime;

    const minutes = remainingTime.match(/\d+분/);
    const seconds = remainingTime.match(/\d+초/);
    if (minutes && seconds) {
      const timeString = `${minutes[0]} ${seconds[0]}`;
      localStorage.setItem('remaining_time', timeString);
    }

  }
}


function extensionTime() {
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  let time = expireDate.setTime(expireDate.getTime() + 10 * 10000); //100 초뒤
  // 로컬스토리지에 이함수 실행마다. 더해진값 저장
  localStorage.setItem('expireDate', time);
  // 업데이트된 쿠키를 생성하여 저장
  document.cookie = `user_id=${cookieValue}; expires=${expireDate.toUTCString()}; path=/`;
}


// 닉네임 입력할때마다 실행될 함수
function checkNicknameInput(nickname, nicknameValidation) {
  nicknameValue = nickname.value;
  if (nicknameValue.length < 2 || nicknameValue.length > 10) {
    nicknameValidation.innerHTML = "닉네임은 2자이상 10자 이하여야합니다.";
    nicknameValidation.style.color = "red";
    return false;
  } else {
    nicknameValidation.innerHTML = "";
    return true;
  }
}

// 비밀번호 입력할때마다 실행될 함수
function checkPasswordInput(passwordInput, passwordValidation, pwpass) {
  passwordValue = passwordInput.value;
  passwordValidation.style.color = "red";
  if (passwordValue.length < 8 || passwordValue.length > 20) {
    passwordValidation.innerHTML = "비밀번호는 8자 이상 20자 이하여야 합니다.";
    return false;
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d~!@#$%^&*()_+|{}[\]:;'<>,.?/`-]+$/.test(
      passwordValue
    )
  ) {
    passwordValidation.innerHTML =
      "비밀번호는 영문 대/소문자, 숫자, 특수문자(~!@#$%^&*()_+|{}[]:;'<>,.?/`) 중 3가지 이상을 포함해야 합니다.";
    return false;
  } else {
    passwordValidation.innerHTML = "";
    return true;
  }

}

// 비밀번호 확인 input에 입력할때마다 실행될 함수
function checkpwchInput(passwordInput, pwcfInput, pwcfValidation) {
  pwcfValidation.style.color = "red";
  if (passwordInput.value != pwcfInput.value) {
    pwcfValidation.innerHTML = "비밀번호가 동일하지 않습니다.";
    return false;
  } else {
    pwcfValidation.innerHTML = "";
    return true;
  }
}


function getUserNick(userId) {
  let nick = "";
  if (userId != "admin") {
    nick = JSON.parse(window.localStorage.getItem("user_" + userId)).user_nickName;
  } else {
    nick = userId;
  }
  return nick;
}


let set2;
let inputTime = document.querySelector('.h-session');
let expire2 = localStorage.getItem('expireDate');
function getRemainingTime1() {
  // let expire = new Date(cookieExpire);
  expire2 = localStorage.getItem('expireDate');
  let now = new Date();
  const expireDateFromLocalStorage = localStorage.getItem('expireDate'); // 로컬스토리지에서 expireDate 값 읽어오기
  now = now.getTime();

  let nowTime = new Date(now);
  let diff = expire2 - nowTime;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (diff < 2) {
    clearInterval(set2);
    return "시간만료"
  }
  inputTime.innerHTML = `남은 시간 : ${minutes}분 ${seconds}초`;
  return `남은 시간 : ${minutes}분 ${seconds}초`;
}
if (inputTime != null) {
  getRemainingTime1();
  set2 = setInterval(getRemainingTime1, 1000);
  document.addEventListener("DOMContentLoaded", function () {
    expireDate.setTime(window.localStorage.getItem('expireDate'))
  });
}


function extensionTime2() {
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  let time = expireDate.setTime(expireDate.getTime() + 10 * 10000); //100 초뒤
  // 로컬스토리지에 이함수 실행마다. 더해진값 저장
  localStorage.setItem('expireDate', time);
  // 업데이트된 쿠키를 생성하여 저장
  document.cookie = `user_id=${cookieValue}; expires=${expireDate.toUTCString()}; path=/`;
}

// 게시물 수정,삭제(+답변등록, 답변수정) 함수
function boardListEdit({ board, value }) {

  let boardList = JSON.parse(localStorage.getItem('board'));
  let idx = boardList.findIndex(function (item) { return item.no == board.no });

  switch (value) {
    case "수정":
      boardList.splice(idx, 1, board);
      break;

    case "삭제":
      boardList.splice(idx, 1);
      break;
  }

  localStorage.setItem("board", JSON.stringify(boardList));
}

// 게시물 객체 생성자 함수
function Board(no, title, content, user, date, answer) {
  this.no = no;
  this.title = title;
  this.content = content;
  this.user = user;
  this.date = date;
  this.answer = answer;
}


// header에 admin 옵션 띄우기
let headerItemList = document.querySelector(".b-header-list");
let headerMypage = document.querySelector(".b-header-list-item2");
let headerAdmin = document.querySelector(".b-header-admin");
if (getCurrentUser() == "admin") {
  headerMypage.style.display = "none";
}
if (headerAdmin != null && getCurrentUser() !== "admin") {
  headerAdmin.style.display = "none";
}


// 지갑내역 객체 생성자 함수
function History(user, type, content, price) {
  this.user = user;
  this.type = type;
  this.content = content;
  this.price = price;
}

// 지갑 내역 저장하는 함수
function setLocalHistory(user, type, content, price) {
  let historyList = JSON.parse(window.localStorage.getItem("history"));
  historyList.push(new History(user, type, content, price));
  window.localStorage.setItem("history", JSON.stringify(historyList));
}


function delCookies() {
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  // document.cookie에 값을 대입하는 형태로 -> 쿠키 삭제(or 생성/수정)
  // 직접 삭제가 아니라 수정이라고 봐야함. 만료일을 정해놓은 쿠키를 과거의 날짜로 수정해서 쿠키를 수정하는 것 -> 수정이 즉 삭제의 의미
  // 쿠키 삭제는? 이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.
  document.cookie = `user_id=${cookieValue}; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;  // 쿠키삭제
  alert("로그아웃");
}

let headerLogout = document.querySelector(".b-header-logout");
if (headerLogout != null) {
  headerLogout.addEventListener("click", function () {
    delCookies();
  })
}