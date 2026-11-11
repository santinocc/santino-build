---
title: Chefini
summary: "A recipe marketplace for Mexico, the US, and Japan, where home cooks discover nearby dishes and buy the recipes from the chefs who made them. Fully built, then decommissioned in October 2026."
stack: [React Native (Expo), TypeScript, Node.js/Express, MongoDB, MongoDB Atlas Vector Search, Python (FastAPI), Stripe Connect, AWS S3, Railway]
role: Founder & full stack engineer
date: "2026-01"
cover: ../../../assets/projects/chefini-logo.png
coverAlt: "Chefini logo: a steaming cooking pot inside a circle, with the words Descubre, Cocina, Comparte (Discover, Cook, Share)."
translationStatus: approved
---

- **Payments:** Stripe Connect with a separate platform account per country, a 65/35 chef-to-platform split, and semi-monthly batched payouts.
- **AI features:** recipe recommendations and a RAG chef assistant built on sentence-transformer embeddings and MongoDB Atlas Vector Search. Designed and first built with Claude Haiku, later run on Groq to stay within free-tier costs.
- **Business setup:** registered the Chefini trademark with Mexico's IMPI in three classes.
- **Shutdown:** decommissioned because the Stripe-based business model was not sustainable; the shutdown covered credential rotation, data export, and cost elimination.

The source code is private.
