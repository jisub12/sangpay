var idInput = document.getElementById("id");
var idValidation = document.getElementById("id-validation");
var passwordInput = document.getElementById("password");
var passwordValidation = document.getElementById("password-validation");
let pwcfInput = document.getElementById("pwcf");
let pwcfValidation = document.getElementById("pwcf-validation");

var nicknameValidation = document.getElementById("nickname-validation");
var nickname = document.getElementById("nickname");

let checkId = document.querySelector(".checkoverlap");
let checkNick = document.querySelector('.check-nickname-overlap');

let welcomeNewuser = document.querySelector(".submitNewUserBtnBox");

let idpass = false;
let nickpass = false;
let pwpass = false;
let pwcf = false;

checkId.addEventListener("click", function () {

  let userList = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      userList.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  let user;
  user = userList.filter(function (item) {
    return item.user_id == idValue;
  });

  if (user.length != 0) {
    // 중복된 아이디
    idValidation.innerHTML = "중복된 아이디가 존재합니다.";
    idInput.value = "";
  } else if (idRegex(idValue)) {
    // 중복안됨 사용 가능
    idValidation.innerHTML = "사용 가능한 아이디입니다.";
    idValidation.style.color = "blue";
    idpass = true;
  } else {
    idValidation.innerHTML = "이메일 형식이 아닙니다.";
    idValidation.style.color = "red";
  }
});
checkNick.addEventListener("click", function () {

  let user;


  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let cuurent_user = JSON.parse(localStorage.getItem(key));

      if (nicknameValue == cuurent_user.user_nickName) {
        nicknameValidation.innerHTML = "중복된 닉네임이 존재합니다.";
        nickname.value = "";
        user = cuurent_user;
        break;
      }
    }

  }

  if (!user) {
    nicknameValidation.innerHTML = "사용 가능한 닉네임입니다.";
    nicknameValidation.style.color = "blue";
    nickpass = true;
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
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(idValue)) {
    idValidation.innerHTML = "이메일 형식이 아닙니다.";
    idValidation.style.color = "red";
  } else {
    idValidation.innerHTML = "";
  }
  idpass = false;
});

var passwordValue;
passwordInput.addEventListener("input", function () {
  pwpass = checkPasswordInput(passwordInput, passwordValidation);
  pwcf = checkpwchInput(passwordInput, pwcfInput, pwcfValidation);
});

// 비밀번호 확인 input에 이벤트리스너 추가
pwcfInput.addEventListener("input", function () {
  pwcf = checkpwchInput(passwordInput, pwcfInput, pwcfValidation);
});

let nicknameValue;
nickname.addEventListener("input", function () {
  nickpass = false;
  checkNicknameInput(nickname, nicknameValidation);
});


window.addEventListener('DOMContentLoaded', () => {
  // sign up 버튼 클릭 시 실행될 함수
  function signUp() {
    document.querySelector('#startButton').click();
    // 여기에 sign up 버튼을 눌렀을 때 해야 할 동작들을 추가합니다.
    setTimeout(() => {
      document.querySelector('#stopButton').click();
    }, 5000);
  }

  // sign up 버튼에 이벤트 리스너 추가
  document.querySelector('#h-gusdnr').addEventListener('click', signUp);

});


window.addEventListener('DOMContentLoaded', () => {
  // 티스토리 공감버튼 이벤트
  function reAction() {
    document.querySelector('#startButton').click();
    setTimeout(() => {
      document.querySelector('#stopButton').click();
    }, 6000);
  }
});



// globals
var canvas;
var ctx;
var W;
var H;
var mp = 150; //max particles
var particles = [];
var angle = 0;
var tiltAngle = 0;
var confettiActive = true;
var animationComplete = true;
var deactivationTimerHandler;
var reactivationTimerHandler;
var animationHandler;

// objects
var particleColors = {
  colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
  colorIndex: 0,
  colorIncrementer: 0,
  colorThreshold: 10,
  getColor: function () {
    if (this.colorIncrementer >= 10) {
      this.colorIncrementer = 0;
      this.colorIndex++;
      if (this.colorIndex >= this.colorOptions.length) {
        this.colorIndex = 0;
      }
    }
    this.colorIncrementer++;
    return this.colorOptions[this.colorIndex];
  }
}

function confettiParticle(color) {
  this.x = Math.random() * W; // x-coordinate
  this.y = (Math.random() * H) - H; //y-coordinate
  this.r = RandomFromTo(10, 15); //radius;
  this.d = (Math.random() * mp) + 10; //density;
  this.color = color;
  this.tilt = Math.floor(Math.random() * 10) - 10;
  this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
  this.tiltAngle = 0;

  this.draw = function () {
    ctx.beginPath();
    ctx.lineWidth = this.r / 2;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
    ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
    return ctx.stroke();
  }
}

$(document).ready(function () {
  SetGlobals();
  InitializeButton();

  $(window).resize(function () {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });

});

function InitializeButton() {
  $('#stopButton').click(DeactivateConfetti);
  $('#startButton').click(RestartConfetti);
}

function SetGlobals() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
}

function InitializeConfetti() {
  particles = [];
  animationComplete = false;
  for (var i = 0; i < mp; i++) {
    var particleColor = particleColors.getColor();
    particles.push(new confettiParticle(particleColor));
  }
  StartConfetti();
}

function Draw() {
  ctx.clearRect(0, 0, W, H);
  var results = [];
  for (var i = 0; i < mp; i++) {
    (function (j) {
      results.push(particles[j].draw());
    })(i);
  }
  Update();

  return results;
}

function RandomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}


function Update() {
  var remainingFlakes = 0;
  var particle;
  angle += 0.01;
  tiltAngle += 0.1;

  for (var i = 0; i < mp; i++) {
    particle = particles[i];
    if (animationComplete) return;

    if (!confettiActive && particle.y < -15) {
      particle.y = H + 100;
      continue;
    }

    stepParticle(particle, i);

    if (particle.y <= H) {
      remainingFlakes++;
    }
    CheckForReposition(particle, i);
  }

  if (remainingFlakes === 0) {
    StopConfetti();
  }
}

function CheckForReposition(particle, index) {
  if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
    if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
    {
      repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
    } else {
      if (Math.sin(angle) > 0) {
        //Enter from the left
        repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
      } else {
        //Enter from the right
        repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
      }
    }
  }
}
function stepParticle(particle, particleIndex) {
  particle.tiltAngle += particle.tiltAngleIncremental;
  particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 3;
  particle.x += Math.sin(angle);
  particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
}

function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
  particle.x = xCoordinate;
  particle.y = yCoordinate;
  particle.tilt = tilt;
}

function StartConfetti() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
  (function animloop() {
    if (animationComplete) return null;
    animationHandler = requestAnimFrame(animloop);
    return Draw();
  })();
}

function ClearTimers() {
  clearTimeout(reactivationTimerHandler);
  clearTimeout(animationHandler);
}

function DeactivateConfetti() {
  confettiActive = false;
  ClearTimers();
}

function StopConfetti() {
  animationComplete = true;
  if (ctx == undefined) return;
  ctx.clearRect(0, 0, W, H);
}

function RestartConfetti() {
  ClearTimers();
  StopConfetti();
  reactivationTimerHandler = setTimeout(function () {
    confettiActive = true;
    animationComplete = false;
    InitializeConfetti();
  }, 100);

}

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
})();



let tologinpage = document.querySelector('.h-Tologinpage');
let h_adminallodw = document.querySelector('.h-adminallow');

setTimeout(() => {
  h_adminallodw.style.animation = 'fadeIn 1s ease-in-out';
  h_adminallodw.classList.add('isactive')
}, 2000);

setTimeout(() => {
  tologinpage.style.display = 'flex';
  tologinpage.style.justifyContent = "center";
  tologinpage.style.alignItems = "center";
  tologinpage.style.border = "1px solid #033104";
  tologinpage.style.animation = 'fadeIn 1s ease-in-out';
  tologinpage.style.opacity = 1;
}, 3000);
