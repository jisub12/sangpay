var idInput = document.getElementById("id");
var idValidation = document.getElementById("id-validation");
var passwordInput = document.getElementById("password");
var passwordValidation = document.getElementById("password-validation");
var nicknameValidation = document.getElementById("nickname-validation");
var nickname = document.getElementById("nickname");

let checkId = document.querySelector(".checkoverlap");
let checkNick = document.querySelector(".check-nickname-overlap");

let idpass = false;
let nickpass = false;
let pwpass = false;

checkId.addEventListener("click", function () {
  // for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //     console.log(key);
  //     if (key.startsWith("user_")) {
  //       let cuurent_user = JSON.parse(localStorage.getItem(key));
  //       console.log(cuurent_user.user_id);
  //       if(idValue!=cuurent_user.user_id){
  //         idpass=true;
  //         if(idValue.length!=0){

  //         }
  //       }
  //       if(idValue==cuurent_user.user_id)
  //       {
  //         idValidation.innerHTML="중복된 아이디가 존재합니다."
  //         idInput.value="";
  //         idpass=false;
  //       }
  //       // console.log(cuurent_user.token[0].token_name); // local 스토리지에 들어있는 current user의 token 에 접근하는법 [0] 번째는 비트 토큰 그 이름에 접근하는법은 .~~`
  //     }
  //   }

  let userList = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
    if (key.startsWith("user_")) {
      userList.push(JSON.parse(localStorage.getItem(key)));
    }
  }
  console.log(userList);

  let user;
  console.log(user);
  console.log(idValue);
  user = userList.filter(function (item) {
    return item.user_id == idValue;
  });

  if (user.length != 0) {
    // 중복된 아이디
    console.log("중복");
    idValidation.innerHTML = "중복된 아이디가 존재합니다.";
    idInput.value = "";
  } else if (idRegex(idValue)) {
    // 중복안됨 사용 가능
    console.log("중복ㄴ");
    idValidation.innerHTML = "사용 가능한 아이디입니다.";
    idValidation.style.color = "blue";
    idpass = true;
  } else {
    idValidation.innerHTML = "이메일 형식이 아닙니다.";
    idValidation.style.color = "red";
  }
  console.log("dfdsfdfsdfdsfd", user);
});
checkNick.addEventListener("click", function () {
  0
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
    if (key.startsWith("user_")) {
      let cuurent_user = JSON.parse(localStorage.getItem(key));
      console.log(cuurent_user.user_nickName);
      if (nicknameValue != cuurent_user.user_nickName) {
        nickpass = true;
        if (nicknameValue.length != 0)
          nicknameValidation.innerHTML = "통과되엇습니다.";
        nicknameValidation.style.color = "blue";
      }
      if (nicknameValue == cuurent_user.user_nickName) {
        nicknameValidation.innerHTML = "중복된 닉네임이 존재합니다.";
        nickname.value = "";
        nickpass = false;
      }
      // console.log(cuurent_user.token[0].token_name); // local 스토리지에 들어있는 current user의 token 에 접근하는법 [0] 번째는 비트 토큰 그 이름에 접근하는법은 .~~`
    }
  }
});

// 아이디 정규식
function idRegex(idValue) {
  let bool = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(idValue);
  return bool;
}

var idValue;
idInput.addEventListener("input", function () {
  idValue = idInput.value;
  console.log(idValue);
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(idValue)) {
    idValidation.innerHTML = "이메일 형식이 아닙니다.";
    idValidation.style.color = "red";
  } else {
    idValidation.innerHTML = "";
  }
});
var passwordValue;
passwordInput.addEventListener("input", function () {
  passwordValue = passwordInput.value;
  if (passwordValue.length < 8 || passwordValue.length > 20) {
    passwordValidation.innerHTML = "비밀번호는 8자 이상 20자 이하여야 합니다.";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d~!@#$%^&*()_+|{}[\]:;'<>,.?/`-]+$/.test(
      passwordValue
    )
  ) {
    passwordValidation.innerHTML =
      "비밀번호는 영문 대/소문자, 숫자, 특수문자(~!@#$%^&*()_+|{}[]:;'<>,.?/`) 중 3가지 이상을 포함해야 합니다.";
  } else {
    passwordValidation.innerHTML = "";
    pwpass = true;
  }
});

let nicknameValue;
nickname.addEventListener("input", function () {
  nicknameValue = nickname.value;
  if (nicknameValue.length < 2 || nicknameValue.length > 10) {
    nicknameValidation.innerHTML = "닉네임은 2자이상 10자 이하여야합니다.";
    nicknameValidation.style.color = "red";
  } else {
    nicknameValidation.innerHTML = "";
  }
});

function newUserBtn(
  user_id = idValue,
  user_pw = passwordValue,
  user_nickName,
  user_allow,
  coin,
  token
) {
  if (idpass == true || nickpass == true || pwpass == true) {
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
    return userString;
  }
  idpass = false;
  nickpass = false;
  pwpass = false;
}

$(document).ready(function () {
  //티스토리 공감버튼 이벤트
  function reAction() {
    $("#startButton").trigger("click");
    setTimeout(function () {
      $("#stopButton").trigger("click");
    }, 6000);
  }

    reAction();
    gusdnr25();
  ;
});
