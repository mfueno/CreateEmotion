# デプロイ先

最新の main ブランチが以下にデプロイされます：
https://mfueno.github.io/CreateEmotion/

# 開発時

Node.js がインストールされていることが必要です。

## 使用しているツール

- パッケージ管理ツール
  - `yarn`
- フォーマッタ
  - `Prettier`

## 開発手順

1. TypeScript でコーディングする
2. tsc でトランスパイルし、`.js`ファイルを生成する
3. webpack で`.js`ファイルを１つにまとめる

## よく使うコマンド

### js ファイルの自動生成

```
tsc -w
```

### bundle.js の自動生成

```
npx webpack -w
```

### localhost 実行（http-server を用いる場合）

`./docs`へ移動して、

```
http-server --cors
```

（デフォルトでは http://localhost:8080 で起動します）
