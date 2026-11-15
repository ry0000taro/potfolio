# ry0000taro Portfolio

ビルド不要の静的サイト(HTML / CSS / JS)です。GitHub Pages でそのまま公開できます。

## 内容の編集
- 文章・制作物・経歴・スキルはすべて `data.js` を編集します。
- スクリーンショットは `assets/` に置き、`data.js` の `works[].images` にパスを追加します。
  例: `images: ["assets/awake-1.png", "assets/awake-2.png"]`

## ローカル確認
```
python3 -m http.server 8000
# http://localhost:8000
```

## GitHub Pages へのデプロイ
1. GitHub で `ry0000taro.github.io` という名前のリポジトリを作成(Public)
2. このフォルダの中身をそのリポジトリへ push
   ```
   git init && git add . && git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/ry0000taro/ry0000taro.github.io.git
   git push -u origin main
   ```
3. Settings → Pages → Source を `Deploy from a branch` / `main` / `/ (root)` に設定
4. 数分後に https://ry0000taro.github.io/ で公開されます
