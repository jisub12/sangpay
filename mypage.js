let nickInput = document.querySelector('.b-new-nickname-input-box input');
let nicknameValidation = document.querySelector('.a-nickname-validation');
let nickpass = false;
let passwordInput = document.querySelector('.b-new-password-input-box input');
let passwordValidation = document.querySelector('.a-pw-validation');
let pwpass=false;
let pwcfInput = document.querySelector('.b-new-password-confirm-input-box input');
let pwcfValidation = document.querySelector('.a-pwcf-validation');
let pwcf = false;


window.onload = function () {
    // 현재 로그인한 사용자 정보 찾아옴
    let user = JSON.parse(window.localStorage.getItem("user_" + getCurrentUser()));
    if (user.user_allow) {
        mypageRender(user);
        addEvent(user);
    } else {
        // 회원 승인 안됐다면
        alert('회원가입 승인 기다리세요');
        // 로그인페이지로 이동
        location.href = './loginpage.html';
    }

}


// 화면 출력
function mypageRender(user) {
    document.querySelector('.b-text-actual-id').innerHTML = user.user_id;
    document.querySelector('.b-text-actual-wallet-address').innerHTML = user.user_Hash;
    console.log(user.user_nickName);
    nickInput.value = user.user_nickName;
}

// 이벤트 추가
function addEvent(user) {

    // 닉네임 input에 입력했을때 형식에서 벗어나면 메시지 표시해줌
    nickInput.addEventListener('input', function () {
        nickpass = checkNicknameInput(nickInput, nicknameValidation);
    });

    // 닉네임 변경 버튼 클릭했을때
    document.querySelector('.b-nickname-change-btn button').addEventListener('click', function (e) {
        let tempNick = nickInput.value;
        if (tempNick == user.user_nickName) {
            alert("현재 닉네임입니다.");
            return false;
        }

        // 중복된 닉네임이 아니고 형식에 맞다면
        if (testNickname(user, tempNick) && nickpass) {
            // 닉네임 변경
            let currentUser = JSON.parse(window.localStorage.getItem("user_"+user.user_id));
            currentUser.user_nickName = tempNick;
            window.localStorage.setItem("user_"+currentUser.user_id, JSON.stringify(currentUser));

            alert("닉네임 변경되었습니다.");

            // 새로고침
            location.reload();
        }
    });


    // 비밀번호 input에 입력했을때 메시지 표시해줌
    passwordInput.addEventListener('input', function() {
        pwpass = checkPasswordInput(passwordInput, passwordValidation, pwpass);
        pwcf = checkpwchInput(passwordInput, pwcfInput, pwcfValidation);
    })

    // 비밀번호 변경 버튼 클릭했을때
    document.querySelector('.b-password-change-btn button').addEventListener('click', function() {
        if (pwpass && pwcf) {
            let currentUser = JSON.parse(window.localStorage.getItem("user_"+user.user_id));
            currentUser.user_pw = passwordInput.value;
            window.localStorage.setItem("user_"+currentUser.user_id, JSON.stringify(currentUser));

            alert("비밀번호 변경되었습니다.");

            // 새로고침
            location.reload();

        } else {
            alert("다시 입력");
        }
    });

    // 비밀번호 확인 input에 입력했을때 메시지 표시해줌
    pwcfInput.addEventListener('input', function() {
        pwcf = checkpwchInput(passwordInput, pwcfInput, pwcfValidation);
    });

}


// 전체 회원(승인+승인대기회원) 중에서 닉네임 중복인지 확인하는 함수
function testNickname(user, tempNick) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        // 닉네임 중복확인
        if (key.startsWith("user_")) {
            let localUser = JSON.parse(localStorage.getItem(key));

            // 현재 사용자가 아닌데 닉네임이 같다면
            if (localUser.user_id != user.user_id && localUser.user_nickName == tempNick) {
                nickInput.value = user.user_nickName;
                alert("중복된 닉네임입니다.");
                return false;
            }
        }
    }

    return true;
}
