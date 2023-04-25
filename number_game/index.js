let secretNumber = Math.floor(Math.random() * 10) + 1
let attempts = 0;
let score = 11;
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
let h_gamestart = document.querySelector(".h-gamestart");
let h_popupbox = document.querySelector(".h-popup_box");
const attemptMessage = document.getElementById("attemptMessage"); // 제출 숫자, 도전 횟수 적을 변수 생성, 지섭

submitGuess.addEventListener("click", function () {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 10) {
        message.textContent = "1에서 10사이의 숫자 입력"
        return;
    }
    attempts++;

    // 제출 숫자, 도전 횟수 , 지섭
    attemptMessage.textContent = `시도 : ${attempts} 번, 추측한 숫자 ${guess}`;

    //게임 끝나는 조건
    if (attempts > 10) {
        score = 0;
        userGetreward(); //도전 비용 깎이게
        renderScorePopup();
        resetGame();
        alert("넌 나가라");

    } else Judge();

    function Judge() {
        if (guess === secretNumber) {
            message.textContent = `축하해 ${attempts}번 만에 맞췄어!`;
            score = score - attempts;
            userGetreward();
            renderScorePopup();
            resetGame();
        } else if (guess > secretNumber) {
            message.textContent = "다운!";

        } else {
            message.textContent = "업!";
        }
    }

});
// 정답초기화
function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guessInput.value = "";
    score = 11;

}

document.querySelector(".h-nowUser").innerHTML = "현재 사용자 : " + getCurrentUser();
h_gamestart.addEventListener("click", function () {
    if (confirm("게임을 시작하시겠습니까?")) {
        h_popupbox.style.display = "none";
    } else {
        alert("취소");
    }
});

function renderScorePopup() {
    h_popupbox.style.display = "block";
    let numberGamePopupTitle = document.querySelector(".b-number-game-popup-title");
    numberGamePopupTitle.innerHTML = "게임결과";
    let numberGamePlayin = document.querySelector(".b-number-game-playin-money");
    let numberGameRule = document.querySelector(".b-number-game-rule");
    let numberGameStartBtnBox = document.querySelector(".b-gamestart-btn-box");
    numberGamePlayin.style.display = "none";
    numberGameRule.style.display = "none";
    numberGameStartBtnBox.style.display = "none";
    let newdiv = document.createElement('div');
    h_popupbox.appendChild(newdiv);
    newdiv.innerHTML = "도전 횟수 : " + attempts + "회";
    newdiv.style.marginTop = "20px";
    let newdiv3 = document.createElement("div");
    h_popupbox.appendChild(newdiv3);
    newdiv3.innerHTML = "보상 : numbertoken " + score + "개";
    newdiv3.style.marginTop = "20px";
    let newdiv2 = document.createElement('div');
    h_popupbox.appendChild(newdiv2)
    newdiv2.innerHTML = "mypage"
    newdiv2.className = "b-new-div-hover";
    newdiv2.style.margin = "auto";
    newdiv2.style.marginTop = "20px";
    newdiv2.style.width = "100px";
    newdiv2.style.height = "30px";
    newdiv2.style.border = "1px solid";
    newdiv2.style.borderRadius = "50px";
    newdiv2.style.display = "flex";
    newdiv2.style.justifyContent = "center";
    newdiv2.style.alignItems = "center";
    newdiv2.style.cursor = "pointer";
    newdiv2.onclick = function () {
        location.href = '../mypage/mypage.html';
    }

    // 다시하기 버튼
    let rediv = document.createElement('div');
    h_popupbox.appendChild(rediv)
    rediv.innerHTML = "다시하기"
    rediv.className = "b-new-div-hover";
    rediv.style.cursor = "pointer";
    rediv.style.margin = "auto";
    rediv.style.marginTop = "20px";
    rediv.style.width = "100px";
    rediv.style.height = "30px";
    rediv.style.border = "1px solid";
    rediv.style.borderRadius = "50px";
    rediv.style.display = "flex";
    rediv.style.justifyContent = "center";
    rediv.style.alignItems = "center";
    rediv.onclick = function () {
        location.href = '../number_game/index.html';
    }
}

let gameUser = getCurrentUser();
let gameUser1 = JSON.parse(localStorage.getItem("user_" + gameUser));
function userGetreward() {
    //보상
    //게임시작시 차감
    // 소수점 4자리로 나타나게 계산
    gameUser1.coin.coin_num = Number((gameUser1.coin.coin_num - 1).toFixed(4));
    setLocalHistory(gameUser, "game", { gamename: "숫자 맞추기게임" }, { type: "sangpay", amount: 1 });

    //점수에 따른 보상얻는 부분
    // 소수점 4자리로 나타나게 계산
    gameUser1.token[8].token_num = Number((gameUser1.token[8].token_num + score).toFixed(4));
    localStorage.setItem("user_" + gameUser, JSON.stringify(gameUser1));
    //내역에저장
    setLocalHistory(gameUser, "game", { gamename: "숫자 맞추기게임" }, { type: gameUser1.token[8].token_name, amount: score });
}
