# 概要
実験に使うために作成したタイピング問題のWebアプリケーション

タイピング問題は3種類で、正答率と回答速度を測ることができる

タイピングで使用できるキーは半角英数字・ー（長音記号）

# 内容
## トップページ
問題とユーザ名を設定

スタートをクリックすると、タイピング問題が始まる

<img width="70%" src="https://github.com/ayakakawabe/typing-Webapplication/assets/103473179/6ce6c81c-15d7-488d-8276-d7b066bb3ee7">

## メインページ
黒文字：問題の単語（上：日本語　下：ローマ字）

青文字：ユーザの入力文字

<img width="70%" src="https://github.com/ayakakawabe/typing-Webapplication/assets/103473179/d75da60d-af5a-4785-a03d-a7fc43f625d3">

1単語ごとに回答が終わると正解/不正解が表示される

次へをクリックすると次の単語に移る

<img width="70%" src="https://github.com/ayakakawabe/typing-Webapplication/assets/103473179/48589d1e-e3c9-45eb-921c-7b6c7816462d">

## 結果表示ページ
1単語ごとの正誤・回答時間（単位はミリ秒）を表示

<img width="70%" src="https://github.com/ayakakawabe/typing-Webapplication/assets/103473179/eca99a18-f193-4b9a-8030-d3e749f824a9">


# 使用方法
事前にNode.jsのインストールしておく
1. githubからコードをローカル環境にダウンロード、またはクローンする
2. typing_webAPPフォルダに移動
   ```sh
   cd ./typing_webAPP
   ```
4. 依存パッケージをインストール
   ```sh
   npm install
   ```
6. ローカルサーバを立てる
   ```sh
   npm run dev
   ```
[URL](http://127.0.0.1:5173/)にアクセス

# 問題の変更
## 初期状態
- Q1："チャンピオン","ビーチボール","国語辞典","都道府県","父の威厳","犬の散歩","不思議ちゃん","私語厳禁"
- Q2："美少年","味が薄い","色鉛筆","図書委員","送りバント","羊の群れ","トランペット","クラリネット"
- Q3："ドレスアップ","カスタネット","四季折々","万華鏡","大河ドラマ","電子辞書","うっとりする","ひっぱりばこ"

## 問題の変更方法
Main.vueの9～11行の単語を変更

日本語とローマ字の位置は対応させること

配列内の各要素は文字列にすること

文字数・単語数はバラバラでも可

```
typingQuestionLists.set("Q1",[["チャンピオン","ビーチボール","国語辞典","都道府県","父の威厳","犬の散歩","不思議ちゃん","私語厳禁"],["tyannpion","bi-tibo-ru","kokugozitenn","todouhukenn","titinoigenn","inunosannpo","husigityann","sigogennkinn"]]);
typingQuestionLists.set("Q2",[["美少年","味が薄い","色鉛筆","図書委員","送りバント","羊の群れ","トランペット","クラリネット"],["bisyounenn","azigausui","iroennpitu","tosyoiinn","okuribannto","hituzinomure","torannpetto","kurarinetto"]]);
typingQuestionLists.set("Q3",[["ドレスアップ","カスタネット","四季折々","万華鏡","大河ドラマ","電子辞書","うっとりする","ひっぱりばこ"],["doresuappu","kasutanetto","sikioriori","manngekyou","taigadorama","dennsizisyo","uttorisuru","hipparidako"]]);
```

## 問題種類の追加方法
ex) 「Q4："トマト","きゅうり"」を追加する場合

App.vueの4行目の配列を増やす

配列内の各要素は文字列

これがトップページの問題選択時の値になる

```
const QuestionList:string[]=["Q1","Q2","Q3","Q4"];
```

Main.pyで追加した問題に使用する単語を入力する
```
typingQuestionLists.set("Q4",[["トマト","きゅうり"],["tomato","tyuuri"]]);
```

App.vueのQuestionListの要素数とtypingQuestionListsの要素数は必ず同じにする
