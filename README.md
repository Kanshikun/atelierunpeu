# 美容室 un peu サイト 更新メモ

## ファイル構成

```
index.html    トップページ(コンセプト・店舗情報)
menu.html     メニュー・料金
staff.html    スタッフ紹介
access.html   アクセス(地図)
css/style.css 全ページのデザイン(色は先頭の :root で変更可)
js/main.js    スマホ用メニューボタンの開閉
images/       写真
favicon.ico   ブラウザタブのアイコン
```

## よくある更新のしかた

- **料金を変える**: `menu.html` を開き、`¥5,000` などの数字を書き換える
- **営業時間・定休日を変える**: 4つのHTMLすべてのヘッダー(`tel-hours`)と、
  `index.html` の店舗情報表・ページ下部(フッター)を書き換える
- **写真を差し替える**: 同じファイル名で `images/` に上書きする
  (スライドショーは `images/slide1.jpg` 〜 `slide3.jpg` の3枚)

## 公開のしかた

静的ファイルのみなので、フォルダの中身をそのままアップロードすれば
FC2ホームページ(FTP)でも、GitHub Pages / Netlify などでも公開できます。
旧サイトと同じファイル名(index.html など)なので、FC2に上書きアップロードすれば
今のURLのまま切り替わります。

※文字コードは旧サイトの Shift_JIS から UTF-8 に変更済み。
各HTMLに `<meta charset="UTF-8">` を入れてあるのでそのままで動きます。
