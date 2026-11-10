---
title: Sapore Pay
summary: "レシピマーケットプレイスのシェフ登録機能。ETHGlobal Tokyo 2026で一人で開発。World IDで各シェフアカウントが一人の実在する人間に属することを証明し、各シェフは支払い先アドレスを保持するENS名を取得する。"
stack: [TypeScript, React, Node.js/Express, Solidity, viem, World ID (IDKit), Privy, ENS]
role: 個人開発
date: "2026-09"
event: ETHGlobal Tokyo 2026
repo: https://github.com/santinocc/sapore-pay
showcase: https://ethglobal.com/showcase/chef-id-sapore-pay-w3khx
translationStatus: draft
---

SaporeはChefiniの暗号資産専用の姉妹サービスです。シェフは通常のOAuthでサインインしていたため、一人で何個でもシェフアカウントを作り、プランごとの料理数の上限を回避できました。

- **人間であることの証明：** シェフはWorld ID 4.0で認証し、サーバー側でWorldの本番検証エンドポイントに照合します。同じ人による2回目の認証はWorld自体が拒否し、この拒否の流れも実環境でテスト済みです。
- **オンチェーンのID：** 続いてシェフは`<alias>.sapore.eth`を取得します。これはSepoliaテストネット上のENSv2サブネームで、イベント中に作成・デプロイしたSolidityのレジストラーコントラクトを通じて発行されます。支払い先レコードにはPrivyの組み込みウォレットが署名します。
- **スコープ：** 決済部分（ステーブルコインでの購入と支払い）は計画したもののスタブのままで、提出物はSepolia上でエンドツーエンドに動くシェフ登録に絞りました。
- **プロセス：** 回り道も含めたすべての工程を、リポジトリのエンジニアリングログに記録しています。
