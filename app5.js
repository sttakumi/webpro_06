const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.json({ greet1: message1, greet2: message2 });
});

app.get("/hello2", (req, res) => {
  res.json({ greet1: "Hello world", greet2: "Bon jour" });
});


app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if (num == 1) luck = '大吉';
  else if (num == 2) luck = '中吉';
  else if (num == 3) luck = '小吉';
  else if (num == 4) luck = '吉';
  else if (num == 5) luck = '凶';
  else luck = '大凶';

  console.log('あなたの運勢は' + luck + 'です');

  res.json({ number: num, luck: luck });
});


app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
 
  if(cpu=='グー' && hand=='パー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if(cpu=='グー' && hand=='チョキ'){
    judgement = '負け';
    total += 1;
  }
  else if(cpu=='グー' && hand=='グー'){
    judgement = 'あいこ';
    total += 1;
  }
  else if(cpu=='パー' && hand=='パー'){
    judgement = 'あいこ';
    total += 1;
  }
  else if(cpu=='パー' && hand=='チョキ'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  else if(cpu=='パー' && hand=='グー'){
    judgement = '負け';
    total += 1;
  }
  else if(cpu=='チョキ' && hand=='パー'){
    judgement = '負け';
    total += 1;
  }
  else if(cpu=='チョキ' && hand=='チョキ'){
    judgement = 'あいこ';
    total += 1;
  }
  else if(cpu=='チョキ' && hand=='グー'){
    judgement = '勝ち';
    win += 1;
    total += 1;
  }
  // ここまで
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});



app.get("/agecheck", (req, res) => {
  const age = Number(req.query.age);
  let message = '';

  if (age < 13) {
    message = "あなたは子供です！";
  } else if (age < 20) {
    message = "あなたは未成年です！";
  } else if (age < 65) {
    message = "あなたは大人です！";
  } else {
    message = "あなたは高齢者です！";
  }


  res.json({ age, message });
});

app.get("/checkNumber", (req, res) => {
  const number = Number(req.query.number);
  let responseMessage = '';

  if (number % 2 === 0) {
    responseMessage = "偶数です。";
  } else {
    responseMessage = "奇数です。";
  }


  res.json({ number, message: responseMessage });
});






app.listen(8080, () => console.log("Example app listening on port 8080!"));
