---
title: Invoice API
summary: "Un proyecto de aprendizaje: una API de facturas en Go sobre PostgreSQL. Calcula el impuesto al consumo japonés, lista facturas con filtros y paginación por cursor, y sugiere qué pago bancario corresponde a qué factura."
stack: [Go, PostgreSQL, Docker Compose, GitHub Actions]
role: Desarrollador en solitario
date: "2026-11"
repo: https://github.com/santinocc/invoice-api
cover: ../../../assets/projects/invoice-api-reconcile.png
coverAlt: "Salida de terminal del servicio en ejecución: tres facturas con subtotal, impuesto y total en yenes, y una respuesta de conciliación que clasifica cuatro pagos bancarios en coincidentes, ambiguos y sin coincidencia."
translationStatus: draft
---

- **Impuestos:** los montos son yenes enteros guardados como números enteros. El impuesto al consumo (8% y 10%) se redondea hacia abajo una sola vez por tasa en cada factura, como exigen las facturas calificadas (適格請求書), no línea por línea.
- **Conciliación:** `POST /reconcile` asocia pagos con facturas por monto exacto en O(n + m) con un mapa hash, y usa el nombre del pagador solo para desempatar. Cuando no puede estar seguro, incluso cuando dos pagos apuntan a la misma factura, reporta el caso como ambiguo en lugar de adivinar. Solo sugiere coincidencias y no guarda nada.
- **PostgreSQL:** una factura y sus partidas se guardan en una sola transacción. La lista usa paginación por cursor (keyset) por fecha de vencimiento e ID, con índices verificados con `EXPLAIN`. Todas las consultas pasan los valores como parámetros.
- **Pruebas y CI:** pruebas basadas en tablas para el dominio, los dos tipos de almacenamiento y los handlers HTTP, ejecutadas con el detector de condiciones de carrera. La CI ejecuta las pruebas de PostgreSQL contra un contenedor de servicio y falla si se omite alguna prueba.
