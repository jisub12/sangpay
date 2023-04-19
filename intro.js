
let walletIntro = document.querySelector(".b-wallet-intro");

let walletIcon = document.querySelector(".b-wallet-icon");
let nevercoin = document.querySelector(".b-moving-box");
walletIcon.onclick = function(){
    walletIntro.style.animation = "walletIntroFadeOut 1s ease forwards";
    setTimeout(() => {
        location.href = "loginpage.html";
    }, 1000);
}