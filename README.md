# このリポジトリについて

このリポジトリは、画像データを API に送る機能のサンプルです。

## 概要

画像を「撮影」もしくは「選択」することが可能で、その画像を用いて外部 API にリクエストすることを想定して作成しました。

外部 API は基本的にサーバーサイド側で叩くことになると思うので、一度 Nuxt で作成した API に画像データを渡し、画像を復元しています。

今回は外部 API を叩く前段階までをイメージして作成しました。

## 想定される挙動

「写真を撮影・選択する」部分を押下します。そうすると、

iPhone・Android では、写真を撮影するか、アルバムから選択するかを選べるポップアップのようなものが表示されます。

PC では、ファイル選択画面が表示されます。
