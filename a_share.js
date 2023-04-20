
const remainedTime = document.querySelector('.b-session');

let nowuser = ""; //로그인한 현재 유저
// 김아현 ---테스트용으로 작성해봄
let bittoken = new token("bittoken", 10, 1, 0.5);  //
let ethtoken = new token("ethtoken", 10, 1, 0.5);
let dogetoken = new token("dogetoken", 10, 1, 0.5);
let ahyeontoken = new token("ahyeontoken", 10, 10, 0.5);
let byungjootoken = new token("byungjootoken", 10, 5, 0.5);
let hyunuktoken = new token("hyunuktoken", 20, 5, 0.5);
let jisubtoken = new token("jisubtoken", 10, 5, 0.5);
let loltoken = new token("loltoken", 10, 2, 0.5);
let bgtoken = new token("bgtoken", 10, 2, 0.5);
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
  this.token[7] = loltoken;
  this.token[8] = bgtoken;
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
// user 객체 생성 (Hash값 가져오기 위해 만듦)

function getCurrentUser() {

  let userId = "";

  // 임의로 쿠키 생성
  let expireDate2 = new Date();
  expireDate2.setTime(expireDate2.getTime() + 100000000 * 1000);
  // document.cookie = `user_id=${"12321344asd@naver.com"}; expires=` + expireDate2.toUTCString() + "; path=/";

  console.log(document.cookie);
  let start = document.cookie.indexOf(`user_id=`);

  if (start != -1) {
    userId = document.cookie.split('=')[1];
  }

  console.log(userId);

  let userStorage = window.localStorage.getItem(`user_${userId}`);
  if (userStorage) {
    console.log(JSON.parse(userStorage).token);
  }

  console.log(JSON.parse(window.localStorage.getItem(`user_${userId}`)));

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

  console.log(`idpss ${idpass}, nick ${nickpass}, pwpass ${pwpass} pwcf ${pwcf}`);
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
    console.log("새로운 유저가 생성되었습니다");
    let popup = document.querySelector('.h-welcomepopup');
    popup.classList.add("popupactive")

    idpass = false;
    nickpass = false;
    pwpass = false;
    pwcf = false;

    return userString;
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
    console.log("끝");
    return "시간만료"
  }
  return `남은 시간 : ${minutes}분 ${seconds}초`;
}
let set1; //setInterval 함수
//버튼 누르면 시간추가 쿠키값에 반영


// admin 아이디, 비밀번호 로컬스토리지에 저장
window.localStorage.setItem("admin", JSON.stringify({'id': 'admin', 'pw':'admin'}));

function loginUser(id, pw) {
  let user;

  let admin = JSON.parse(window.localStorage.getItem('admin'));
  // id가 admin이라면
  if (id == admin.id) {
    if (pw == admin.pw) {
      // 관리자 로그인 성공

      // 관리자 쿠키 생성
      let expireDate = new Date();
      expireDate.setTime(expireDate.getTime() + 100000 * 1000);
      document.cookie = `user_id=${"admin"}; expires=` + expireDate.toUTCString() + "; path=/";

      location.href = 'adminpage.html';
      return true;
    } else {
      alert('비밀번호 확인');
      return true;
    }
  }

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let cuurent_user = JSON.parse(localStorage.getItem(key));
      console.log(cuurent_user.user_id);
      console.log(cuurent_user.user_pw);
      // console.log(cuurent_user.token[0].token_name); // local 스토리지에 들어있는 current user의 token 에 접근하는법 [0] 번째는 비트 토큰 그 이름에 접근하는법은 .~~`
      if (
        // pw == cuurent_user.user_pw &&
        id == cuurent_user.user_id
        // && cuurent_user.user_allow == true
      ) {
        user = cuurent_user;
        break;
        // console.log("로그인성공");
        // nowuser = cuurent_user;
        // alert("로그인에 성공하셨습니다.")
        // expireDate=new Date();

        // location.href = './wallet.html';

        // // 쿠키 생성
        // userLogin();
        // console.log(nowuser)
      }
    }
  }

  //
  if (user) {
    // 아이디 비밀번호 동일하고 승인된 회원이라면
    if (user.user_pw == pw && user.user_allow) { // 로그인 성공
      console.log("로그인성공");
      nowuser = user;
      alert("로그인에 성공하셨습니다.")
      expireDate = new Date();
      // 쿠키 생성
      userLogin();

      location.href = './wallet.html';

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
function userLogin() {
  expireDate.setTime(expireDate.getTime() + 10 * 1000);
  remainingTime = getRemainingTime(expireDate.toUTCString()); // 쿠키 만료까지 남은 시간 계산
  console.log(remainingTime);
  set1 = setInterval(printTime, 1000);
  // `userid=${nowuser.user_id}; expires=${kstTime.toUTCString()}; path=/
  document.cookie = `user_id=${nowuser.user_id}; expires=` + expireDate.toUTCString() + "; path=/";
  function printTime() {
    remainingTime = getRemainingTime(expireDate.toUTCString()); // 쿠키 만료까지 남은 시간 계산
    console.log(remainingTime);
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
  console.log(expireDate.getTime());
  console.log(cookieValue);
  let time = expireDate.setTime(expireDate.getTime() + 10 * 10000); //10 초뒤
  console.log(time);
  console.log("작동함");
  // 업데이트된 쿠키를 생성하여 저장
  document.cookie = `user_id=${cookieValue}; expires=${expireDate.toUTCString()}; path=/`;
  console.log(document.cookie);
}



// 닉네임 입력할때마다 실행될 함수
function checkNicknameInput(nickname, nicknameValidation) {
  nicknameValue = nickname.value;
  console.log(nickname.value);
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