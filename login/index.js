
// 입력 필드의 기본값을 삭제하고, 포커스가 없을 경우에만 다시 표시합니다.
const usernameInput = document.getElementById('username');
const userPwInput = document.getElementById('password');

usernameInput?.addEventListener('blur', function () {
  if (!this.value) {
    this.value = '이메일 또는 아이디';
  }
});

const login = document?.querySelector('.j-loginbtn');
login?.addEventListener('click', function () {
  loginUser(usernameInput.value, userPwInput.value);
});

let userString = ""; //유저

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

function getCookies() {
  /* 로컬에 저장된 쿠키 뿌려주기 */
  const allCookies = document.cookie;
  // 하나의 문자열로 리턴 --> cookie1=value; cookie2=value; cookie3=value

  /* if 조건문 -> 쿠키가 있으면 */
  if (allCookies != "")
    alert(`저장된 쿠키의 값은 ${allCookies} \n다시 방문해주셔서 환영합니다.`);
  else alert(`저장된 쿠키가 없습니다. \n(첫방문을 환영합니다.)`);
}
