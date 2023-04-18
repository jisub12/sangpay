
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
