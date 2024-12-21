# webpro_06
# app5.js全体のドキュメント

## 起動方法
Node.js と npm がインストールされていることを確認して, app5.js ファイルがあるディレクトリでnode app5.jsを実行してサーバーを起動させる.その後, ブラウザで http://localhost:8080/public/~.html にアクセスすることで、アプリケーションの機能を利用できる.
## Gitによるファイル管理
git add .

git commit -am'変更しました'

git push  

トークン名

これらを順に実行していく.
## ファイル一覧
ファイル名|説明|
-|-
app5.js|プログラム本体|
public/hello.ejs | 挨拶メッセージの開始画面 |
views/hello.html | 挨拶メッセージのテンプレートファイル
public/Apple_logo_black.svg | アイコン画像表示の開始画面
views/icon.ejs | アイコン画像表示のテンプレートファイル |
pubkic/luck.ejs | 運勢占いの開始画面 |
views/luck.html | 運勢占いのテンプレートファイル|
public/janken.html | じゃんけんの開始画面|
views/janken.ejs | じゃんけんのテンプレートファイル|
public/agecheck.html | 年齢チェックの開始画面 |
views/agecheck.ejs|年齢チェックのテンプレートファイル |
public/checkNumber.html | 奇数・偶数判定の開始画面 |
views/checkNumber.ejs | 奇数・偶数判定のテンプレートファイル|

## 機能ごとの説明と使用手順
### 挨拶メッセージ
サーバーを起動し, http://localhost:8080/public/hello.html　
にアクセスすることでユーザーに "Hello world"と"Bon jour"を表示する.

### アイコン画面表示
サーバーを起動し, http://localhost:8080/public/Apple_logo_black.svg　
にアクセスすることでユーザーに Appleロゴのアイコン画像が表示される.

### 運勢占い
サーバーを起動し, http://localhost:8080/public/luck.html
にアクセスして「運勢を占う」を押すことで運勢が表示される.

### じゃんけん
サーバーを起動し, http://localhost:8080/public/janken.html　
にアクセスしてグー, チョキ, パーのいずれかを選択することで勝敗が表示される.

### 年齢チェック
サーバーを起動し, http://localhost:8080/public/agecheck.html　
にアクセスして年齢を入力することで, その年齢に応じたメッセージが表示される.

### 奇数・偶数判定
サーバーを起動し, http://localhost:8080/public/checkNumber.html
にアクセスして数値を入力することで, その数値が奇数なのか偶数なのかが表示される.


## じゃんけんのフローチャート
```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"じゃんけんぽん"}
yes["勝ち"]
no1["負け"]
cnt["勝利カウント"]
retray["もう一戦?"]
no2["やめる"]
yes2["続ける"]
battle["試合数カウント"]

start --> if
if -->|yes| yes
yes --> cnt

if -->|no| no1
no1 --> if
no1 --> battle

cnt --> battle


battle --> retray
retray --> yes2 
retray --> no2 
yes2 --> if
no2 --> end1
```

## 年齢チェックのフローチャート

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"年齢を入力"}


start --> if
if -->|1~12| あなたは子供です!
 -->end1
if -->|13~19| あなたは未成年です!
 -->end1
if -->|20~64| あなたは大人です!
 -->end1
if -->|65~| あなたは高齢者です!
 -->end1


```

## 奇数・偶数判定のフローチャート
```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"数字を入力"}
yes["奇数"]
no1["偶数"]


start --> if
if -->|2n| no1
 --> end1
if -->|2n+1| yes
yes --> end1

```


