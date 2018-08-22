# UserAgentの調査

## 概要

- iosとandroidそれぞれどんなUserAgentで送信されているかの検証

## 環境

- react-native: 0.52.2
- react: 16.2.0
- react-native-fetch-polyfill: 1.0.2

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
