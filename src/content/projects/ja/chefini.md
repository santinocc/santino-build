---
title: Chefini
summary: "メキシコ、米国、日本向けのレシピマーケットプレイス。家庭で料理する人が近くの料理を見つけ、それを作ったシェフからレシピを購入できる。完成まで開発した後、2026年10月にサービスを終了。"
stack: [React Native (Expo), TypeScript, Node.js/Express, MongoDB, MongoDB Atlas Vector Search, Python (FastAPI), Stripe Connect, AWS S3, Railway]
role: 創業者・フルスタックエンジニア
date: "2026-01"
cover: ../../../assets/projects/chefini-logo.png
coverAlt: "Chefiniのロゴ：円の中に湯気の立つ鍋と、Descubre・Cocina・Comparte（見つける・作る・共有する）の文字。"
translationStatus: draft
---

- **決済：** Stripe Connectを使用。国ごとに別のプラットフォームアカウント、シェフとプラットフォームの65/35の分配、月2回のまとめ払い。
- **AI機能：** sentence-transformersの埋め込みベクトルとMongoDB Atlas Vector Searchによるレシピ推薦とRAGシェフアシスタント。Claude Haikuで設計・初期実装し、その後は無料枠のコストに収めるためGroqで運用。
- **事業の立ち上げ：** メキシコ産業財産庁（IMPI）にChefiniの商標を3区分で登録。
- **サービス終了：** Stripeを前提としたビジネスモデルが持続可能でないため終了。認証情報のローテーション、データのエクスポート、コストの解消まで対応。

ソースコードは非公開です。
