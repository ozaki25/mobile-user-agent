# UserAgentの調査

## 概要

- iosとandroidそれぞれどんなUserAgentで送信されているかの検証

## 環境

- react-native: 0.52.2
- react: 16.2.0
- react-native-fetch-polyfill: 1.0.2

## 前提

- nodeが入っていること
  - 以下のコマンドでバージョンが表示されること

```
node -v
npm -v
```

## 検証手順

### セットアップ

```
git clone http://52.196.135.187/randd/user-agent-sample.git
cd user-agent-sample
npm i
```

### サーバ起動

```
npm run start:server
```

- localhostの3000ポートで起動
- エンドポイントは`/test`だけ
- `/test`にアクセスするとログにUserAgentを出力する

### アプリ起動

#### iosの場合

```
react-native run-ios
```

#### androidの場合

- シミュレータを起動しておく

```
react-native run-android
```

### 検証

- 初期画面を表示すると自動的にサーバに通信するのでサーバのログにUserAgentが出力される
- 画面をリロードすれば再度通信が走るので何度も確認できる

## 検証結果

###  ios

- シミュレータ: iPhone6 iOS10.2
- ログに出力されたUserAgent

```
SyotodokeSample/1 CFNetwork/808.2.16 Darwin/15.6.0
```

### android

- シミュレータ: Nexus5X API27
- ログに出力されたUserAgent

```
okhttp/3.6.0
```
