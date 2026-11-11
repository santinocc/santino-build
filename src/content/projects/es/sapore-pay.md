---
title: Sapore Pay
summary: "Registro de chefs para un marketplace de recetas, desarrollado en solitario en ETHGlobal Tokyo 2026: World ID comprueba que cada cuenta de chef pertenece a una sola persona real, y cada chef obtiene un nombre ENS que guarda su dirección de pago."
stack: [TypeScript, React, Node.js/Express, Solidity, viem, World ID (IDKit), Privy, ENS]
role: Desarrollador en solitario
date: "2026-09"
event: ETHGlobal Tokyo 2026
repo: https://github.com/santinocc/sapore-pay
showcase: https://ethglobal.com/showcase/chef-id-sapore-pay-w3khx
cover: ../../../assets/projects/sapore-logo.png
coverAlt: "Logo de Sapore: una letra S blanca con un punto rojo sobre fondo negro."
translationStatus: draft
---

Sapore es la versión solo cripto de Chefini. Sus chefs iniciaban sesión con OAuth común, lo que permitía que una sola persona creara cuantas cuentas de chef quisiera y se saltara los límites de platillos de cada plan.

- **Prueba de humanidad:** el chef se verifica con World ID 4.0, validado del lado del servidor contra el endpoint de verificación de producción de World. World rechaza un segundo intento de la misma persona, y ese rechazo se probó en vivo.
- **Identidad on-chain:** después, el chef obtiene `<alias>.sapore.eth`, un subnombre de ENSv2 en la testnet Sepolia, mediante un contrato registrador en Solidity escrito y desplegado durante el evento. Una wallet integrada de Privy firma los registros de pago.
- **Alcance:** el flujo de pagos (cobro y pagos en stablecoins) se planeó pero quedó como stubs; la entrega se centró en el registro de chefs, funcionando de punta a punta en Sepolia.
- **Proceso:** cada paso, incluidos los errores, quedó registrado en la bitácora de ingeniería del repositorio.
