---
title: Sapore Pay
summary: "Chef onboarding for a recipe marketplace, built solo at ETHGlobal Tokyo 2026: World ID proves each Chef account belongs to one unique human, and each Chef claims an ENS name that holds their payout address."
stack: [TypeScript, React, Node.js/Express, Solidity, viem, World ID (IDKit), Privy, ENS]
role: Solo developer
date: "2026-09"
event: ETHGlobal Tokyo 2026
repo: https://github.com/santinocc/sapore-pay
showcase: https://ethglobal.com/showcase/chef-id-sapore-pay-w3khx
translationStatus: approved
---

Sapore is the crypto-only sibling of Chefini. Its Chefs signed in with ordinary OAuth, which let one person create any number of Chef accounts and get around per-tier dish limits.

- **Proof of personhood:** a Chef verifies with World ID 4.0, checked server-side against World's production verify endpoint. A second attempt by the same person is rejected by World itself, and that rejection path was tested live.
- **On-chain identity:** the Chef then claims `<alias>.sapore.eth`, an ENSv2 subname on the Sepolia testnet, through a Solidity registrar contract written and deployed during the event. A Privy embedded wallet signs the payout records.
- **Scope:** the payment rail (stablecoin checkout and payouts) was planned but left as stubs; the submission focused on onboarding, working end to end on Sepolia.
- **Process:** every step, including wrong turns, is recorded in the repository's engineering log.
