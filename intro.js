
let walletIntro = document.querySelector(".b-wallet-intro");

let walletIcon = document.querySelector(".b-wallet-icon");
let nevercoin = document.querySelector(".b-moving-box");

let fakeWallet1 = document.querySelector(".b-wallet-icon-fake1");
let fakeWallet2 = document.querySelector(".b-wallet-icon-fake2");

setTimeout(() => {
    nevercoin.style.display = "none";
    walletIcon.style.display = "none";
    fakeWallet1.style.display = "block";
}, 6000);

setTimeout(() => {
    fakeWallet1.style.display = "none";
    fakeWallet2.style.display = "block";
}, 9000);

fakeWallet2.onclick = function(){
    walletIntro.style.animation = "walletIntroFadeOut 1s ease forwards";
    fakeWallet2.style.animation = "walletZoomIn 1s ease forwards";
    setTimeout(() => {
        location.href = "./login/loginpage.html";
    }, 1000);
}

