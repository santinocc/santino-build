---
title: k8s SLO Pipeline Demo
summary: "A learning project that runs a FastAPI service, a scheduled data pipeline, and SLO-based monitoring on a local Kubernetes (kind) cluster. Everything runs on a laptop, with no cloud resources."
stack: [Python (FastAPI), PostgreSQL, Docker, Kubernetes (kind), Kustomize, Helm, Prometheus, Grafana, Terraform, GitHub Actions]
role: Solo developer
date: "2026-11"
repo: https://github.com/santinocc/k8s-slo-pipeline-demo
translationStatus: approved
---

- **Kubernetes:** the API runs as a Deployment with health and readiness probes, zero-downtime rolling updates, and a HorizontalPodAutoscaler that scales it from 2 to 6 pods.
- **Data pipeline:** a CronJob upserts generated sensor data into PostgreSQL every 5 minutes. It is safe to re-run, and failed runs retry.
- **SLO:** 99% of requests succeed (non-5xx) over 28 days, with fast and slow multi-window burn-rate alerts. The alert rules are unit-tested with promtool, and a recorded demo shows them firing and clearing.
- **Quality:** GitHub Actions runs lint, unit and integration tests, image checks, and manifest validation on every push. The repository also has architecture decision records and an alert runbook.
