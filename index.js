// let one = new user(
//   "gusdnr205@naver.com",
//   123456789,
//   "goldenbeer",
//   false,
//   defaultCoin,
//   new token("bitcoin", 100)
// );
// let use = JSON.stringify(one);
// localStorage.setItem("user", use);
// let myData = localStorage.getItem("user");
// console.log(myData);
// let usercount = 0;
// let userString = "";

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
// window.localStorage.clear();
newUserBtn(
  "gusdnr200@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr201@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr202@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr203@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr204@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr206@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr207@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr208@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr209@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);

newUserBtn(
  "gusdnr205@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);
newUserBtn(
  "12321344asd@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);
newUserBtn(
  "fadfwfr@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
);
newUserBtn(
  "wrfqgrqg@naver.com",
  123456789,
  "goldenbeer",
  false,
  defaultCoin,
  new token("bitcoin", 100)
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
      console.log(cuurent_user.user_nickName);
      if ((pw == cuurent_user.user_pw && id == cuurent_user.user_id && cuurent_user.user_allow==true)) {
        console.log("로그인성공");
      }
    
    }
  }
}
loginUser("gusdnr205@naver.com",1234456789);
//내부값이랑 비교하는 구문 맞으면 로그인(쿠키추가)쿠키에 로그인상태 true 부여
// 시간이 지나서 쿠키가 사라질때 로그인상태 false
