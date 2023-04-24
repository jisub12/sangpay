let secretNumber = Math.floor(Math.random() * 10) + 1
let attempts = 0;
let score=10;
const guessInput = document.getElementById("guessInput");
const submitGuess = document.getElementById("submitGuess");
const message = document.getElementById("message");
let h_gamestart = document.querySelector(".h-gamestart");
let h_popupbox = document.querySelector(".h-popup_box");
const attemptMessage = document.getElementById("attemptMessage"); // 제출 숫자, 도전 횟수 적을 변수 생성, 지섭

submitGuess.addEventListener("click", function(){
    const guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < 1 || guess > 10){
        message.textContent = "1에서 10사이의 숫자 입력"
        return;
    }
    attempts++;

    // 제출 숫자, 도전 횟수 , 지섭
    attemptMessage.textContent = `시도 : ${attempts} 번, 추측한 숫자 ${guess}`;

    //게임 끝나는 조건
    if(attempts>10)
    {
        score=0;
        renderScorePopup();
        resetGame();
        alert("넌 나가라");


    }else Judge();


    function Judge(){
        if(guess === secretNumber){
            message.textContent = `축하해 ${attempts}번 만에 맞췄어!`;
            score=score-attempts;
            userGetreward();
            renderScorePopup();
            resetGame();
            // setTimeout(() => {
            //     if(confirm("게임을 더하시겠습니까?"))
            //     location.href='../number_game/index.html';
            //     else location.href='../mypage/mypage.html';
            //   }, 3000);
        } else if (guess > secretNumber){
            message.textContent = "다운!";

        } else {
            message.textContent = "업!";
            }
    }



});
// 정답초기화
function resetGame(){
    secretNumber = Math.floor(Math.random() * 10 ) + 1;
    attempts = 0;
    guessInput.value = "";
    score=10;

}

document.querySelector(".h-nowUser").innerHTML ="현재 사용자:  "+getCurrentUser();
h_gamestart.addEventListener("click", function () {
    if (confirm("게임을 시작하시겠습니까?")) {
        alert("확인");
        setTimeout(() => {
        }, 1000);
      } else {
        alert("취소");
      }
    h_popupbox.style.display = "none";


}
)

function renderScorePopup()
{
  h_popupbox.style.display = "block";
    let newdiv=document.createElement('div');
    h_popupbox.appendChild(newdiv);
    newdiv.innerHTML="점수" +score;
    let newdiv2=document.createElement('div');
    h_popupbox.appendChild(newdiv2)
    newdiv2.innerHTML="mypage로"
    newdiv2.onclick=function(){
        location.href='../mypage/mypage.html';
    }

    // 다시하기 버튼
    let rediv=document.createElement('div');
    h_popupbox.appendChild(rediv)
    rediv.innerHTML="다시하기"
    rediv.onclick=function() {
        location.href='../number_game/index.html';
    }


}

let gameUser=getCurrentUser();
console.log("지금 게임유저",gameUser);
let gameUser1=JSON.parse(localStorage.getItem("user_"+gameUser));
function userGetreward() {
    //보상
    console.log("지금 게임유저2",gameUser1);
    //게임시작시 차감
    gameUser1.coin.coin_num=gameUser1.coin.coin_num-1;
    setLocalHistory(gameUser,"game",{gamename:"숫자 맞추기게임"},{type:"sangpay",amount:1});

    //점수에 따른 보상얻는 부분
    gameUser1.token[9].token_num=gameUser1.token[9].token_num+score;
    localStorage.setItem("user_"+gameUser,JSON.stringify(gameUser1));
    //내역에저장
    setLocalHistory(gameUser,"game",{gamename:"숫자 맞추기게임"},{type:gameUser1.token[9].token_name,amount:score});
}
