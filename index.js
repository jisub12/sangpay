

console.log(bitcoin);
let one = new user(
  "gusdnr205@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
);

let use = JSON.stringify(one);
localStorage.setItem("user", use);
let myData = localStorage.getItem("user");
console.log(myData);
let userString = ""; //유저 
let nowuser = ""; //로그인한 현재 유저 

// function newUserBtn(user_id,user_pw,user_nickName,user_allow,coin,token){
//     // usercount++;
//     let thing;
//     thing=new user(user_id,user_pw,user_nickName,user_allow,coin,token)
//     userString=userString+(JSON.stringify(thing));
//     console.log(userString);
//     localStorage.setItem('user1', userString);
//     return userString;
// }

// newUserBtn("gusdnr205@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));
// newUserBtn("12321344asd@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));
// newUserBtn("fadfwfr@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));
// newUserBtn("wrfqgrqg@naver.com",123456789,"goldenbeer",false,defaultCoin,new token("bitcoin",100));

// console.log(JSON.parse(userString));
// function compareUser(){

// }


function newUserBtn(user_id, user_pw, user_nickName, user_allow, coin, token) {
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
  return userString;
}

newUserBtn(
  "gusdnr205@naver.com",
  123456789,
  "goldenbeer",
  true,
  defaultCoin,
);
newUserBtn(
  "12321344asd@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
);
newUserBtn(
  "fadfwfr@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
);
newUserBtn(
  "wrfqgrqg@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
);

// 모든 유저 정보 출력
// for(let i=0;i<localStorage.length;i++){
//     let key = localStorage.key(i);
//     if(key.startsWith('user_')){
//         let user = JSON.parse(localStorage.getItem(key));
//         console.log(user);
//     }
// }

function loginUser(id, pw) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let cuurent_user = JSON.parse(localStorage.getItem(key));
      console.log(cuurent_user.user_id);
      console.log(cuurent_user.user_pw);
      // console.log(cuurent_user.token[0].token_name); // local 스토리지에 들어있는 current user의 token 에 접근하는법 [0] 번째는 비트 토큰 그 이름에 접근하는법은 .~~`
      if (
        pw == cuurent_user.user_pw &&
        id == cuurent_user.user_id &&
        cuurent_user.user_allow == true
      ) {
        console.log("로그인성공");
        nowuser = cuurent_user;
      }
    }
  }
}
loginUser("gusdnr205@naver.com",123456789);
//내부값이랑 비교하는 구문 맞으면 로그인(쿠키추가)쿠키에 로그인상태 true 부여
// 시간이 지나서 쿠키가 사라질때 로그인상태 false

//------------------------------------------정규식

//------------------------------------------이메일 정규식
function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return regExp.test(asValue);
}
//------------------------------------------아이디 정규식

function isId(asValue) {
  var regExp = /^[a-zA-Z0-9_\-]{4,16}$/;

  return regExp.test(asValue);
}
//------------------------------------------비밀번호정규식
function isPw(asValue) {
  var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  return regExp.test(asValue);
}

console.log(isEmail("gusdnr205@naver.com"));
console.log(isId("gusdnr205"));
console.log(isPw("Ggusdnr2ekt!@"));

function getCookies() {
  /* 로컬에 저장된 쿠키 뿌려주기 */
  const allCookies = document.cookie;
  // 하나의 문자열로 리턴 --> cookie1=value; cookie2=value; cookie3=value
  console.log(typeof allCookies); // string

  /* if 조건문 -> 쿠키가 있으면 */
  if (allCookies != "")
    alert(`저장된 쿠키의 값은 ${allCookies} \n다시 방문해주셔서 환영합니다.`);
  else alert(`저장된 쿠키가 없습니다. \n(첫방문을 환영합니다.)`);
}

// function setCookies() {
//   const now = new Date(); // 현재 시간(로컬 타임존)
//   const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // utc 시간을 구하는과정 현재의 시간을 밀리초로 반환
//   let kstTime = new Date(utcTime + 3600000 * 9);
//   kstTime.setDate(kstTime.getDate());
//   // 날짜를 쿠키로 저장하기 위해서 -> UTC 방식으로 표기 -> toUTCString() 메서드 사용.
//   // 쿠키 생성하기
//   let cookies;
//   cookies = `userid=${nowuser.user_id}; expires=${kstTime.toUTCString()}; path=/`;
//   console.log(cookies);

//   // 쿠키 저장하기
//   document.cookie = cookies;
//   console.log("쿠키");
//   console.log(cookies);
//   //   alert("쿠키를 생성하였습니다.");
// }


function delCookies() {
  // document.cookie에 값을 대입하는 형태로 -> 쿠키 삭제(or 생성/수정)
  // 직접 삭제가 아니라 수정이라고 봐야함. 만료일을 정해놓은 쿠키를 과거의 날짜로 수정해서 쿠키를 수정하는 것 -> 수정이 즉 삭제의 의미
  // 쿠키 삭제는? 이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.
  document.cookie = "username=honggildong;"; // 쿠키생성
  document.cookie = "username=leesoonsin;"; // 쿠키수정
  document.cookie =
    "username=leesoonsin; expires=Sat, 01 Jan 1972 00:00:00 GMT"; // 쿠키삭제
  document.cookie = "userid=leesoonsin; expires=Sat,  01 Jan 1972 00:00:00 GMT"; // 쿠키삭제
  alert("쿠키를 삭제하였습니다.");
}



function getRemainingTime(cookieExpire) {
  let expire = new Date(cookieExpire);
  let now = new Date()
  now=now.getTime();
  let nowTime=new Date(now);
  const diff = expire - nowTime;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (diff < 2 ){
    // 지울 Interval 함수 매개변수로 전달하면된다.
    clearInterval(set1);
    console.log("끝");
    return "시간만료"
  }
  return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
}
let set1; //setInterval 함수 
//버튼 누르면 시간추가 쿠키값에 반영
let expireDate = new Date(); // 쿠키 만료 날짜
function userLogin(){
  expireDate.setTime(expireDate.getTime() + 10 * 1000);
  let remainingTime = getRemainingTime(expireDate.toUTCString()); // 쿠키 만료까지 남은 시간 계산
  console.log(remainingTime);
  set1=setInterval(printTime, 1000);
  // `userid=${nowuser.user_id}; expires=${kstTime.toUTCString()}; path=/
  document.cookie =`user_id=${nowuser.user_id}; expires=` + expireDate.toUTCString() + "; path=/";
  function printTime() {
    let remainingTime = getRemainingTime(expireDate.toUTCString()); // 쿠키 만료까지 남은 시간 계산
    console.log(remainingTime);
  }
}
userLogin();

function extensionTime(){
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)user_id\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  // 만료시간을 현재시간 기준으로 10분 뒤로 설정
  console.log(expireDate.getTime());
  let time=expireDate.setTime(expireDate.getTime() + 10 * 1000); //10 초뒤
  console.log(time);
  console.log("작동함");
  // 업데이트된 쿠키를 생성하여 저장
  document.cookie = `user_id=${cookieValue}; expires=${expireDate.toUTCString()}; path=/`;
  console.log(document.cookie);
}
// 예시
// expireDate.setTime(expireDate.getTime() + 10 * 60 * 1000); 10분

