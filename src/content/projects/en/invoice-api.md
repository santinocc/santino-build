---
title: Invoice API
summary: "A learning project: an invoice API in Go on PostgreSQL. It calculates Japanese consumption tax, lists invoices with filters and cursor pagination, and suggests which bank payment pays which invoice."
stack: [Go, PostgreSQL, Docker Compose, GitHub Actions]
role: Solo developer
date: "2026-11"
repo: https://github.com/santinocc/invoice-api
cover: ../../../assets/projects/invoice-api-reconcile.png
coverAlt: "Terminal output from the running service: three invoices with subtotal, tax and total in yen, and a reconcile response that sorts four bank payments into matched, ambiguous and unmatched."
translationStatus: approved
---

- **Tax:** amounts are whole yen stored as integers. Consumption tax (8% and 10%) is rounded down once per tax rate on each invoice, as qualified invoices (適格請求書) require, not line by line.
- **Reconciliation:** `POST /reconcile` matches payments to invoices by exact amount in O(n + m) with a hash map, and uses the payer name only to break ties. When it cannot be sure, including when two payments claim the same invoice, it reports the case as ambiguous instead of guessing. It only suggests matches and saves nothing.
- **PostgreSQL:** an invoice and its line items are saved in one transaction. The list uses cursor (keyset) pagination on due date and ID, backed by indexes checked with `EXPLAIN`. Every query passes values as placeholders.
- **Tests and CI:** table-driven tests for the domain, both storage backends and the HTTP handlers, run with the race detector. CI runs the PostgreSQL tests against a service container and fails if any test is skipped.
