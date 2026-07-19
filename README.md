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

公開URL: https://atelierunpeu.com/ (GitHub Pages + Cloudflare Registrarのドメイン)

ファイルを編集したら、このフォルダで次を実行すると1〜2分で本番に反映されます。

```bash
git add -A && git commit -m "更新内容をここに書く" && git push
```

※ `CNAME` ファイル(中身は atelierunpeu.com の1行)は独自ドメインの設定なので消さないこと。

※文字コードは旧サイトの Shift_JIS から UTF-8 に変更済み。
各HTMLに `<meta charset="UTF-8">` を入れてあるのでそのままで動きます。
