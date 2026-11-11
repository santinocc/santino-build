---
title: k8s SLO Pipeline Demo
summary: "Un proyecto de aprendizaje que corre un servicio en FastAPI, un pipeline de datos programado y monitoreo basado en SLOs en un clúster local de Kubernetes (kind). Todo corre en una laptop, sin recursos en la nube."
stack: [Python (FastAPI), PostgreSQL, Docker, Kubernetes (kind), Kustomize, Helm, Prometheus, Grafana, Terraform, GitHub Actions]
role: Desarrollador en solitario
date: "2026-11"
repo: https://github.com/santinocc/k8s-slo-pipeline-demo
cover: ../../../assets/projects/k8s-grafana-dashboard.png
coverAlt: "Dashboard de Grafana del SLO: disponibilidad del 100%, presupuesto de errores completo, burn rate en cero y sin alertas activas, con gráficas de solicitudes, latencia y réplicas de la API."
translationStatus: draft
---

- **Kubernetes:** la API corre como un Deployment con probes de salud y disponibilidad, actualizaciones progresivas sin tiempo de inactividad y un HorizontalPodAutoscaler que la escala de 2 a 6 pods.
- **Pipeline de datos:** un CronJob inserta o actualiza datos de sensores generados en PostgreSQL cada 5 minutos. Se puede volver a ejecutar sin riesgo, y las ejecuciones fallidas se reintentan.
- **SLO:** el 99% de las solicitudes debe responder sin error 5xx en 28 días, con alertas de burn rate de ventana múltiple, rápidas y lentas. Las reglas de alerta tienen pruebas unitarias con promtool, y una demo grabada muestra cómo se disparan y se resuelven.
- **Calidad:** GitHub Actions ejecuta lint, pruebas unitarias y de integración, revisión de imágenes y validación de manifiestos en cada push. El repositorio también incluye registros de decisiones de arquitectura y un runbook de alertas.
