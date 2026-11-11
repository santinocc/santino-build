---
title: k8s SLO Pipeline Demo
summary: "ローカルのKubernetes（kind）クラスター上で、FastAPIサービス、定期実行のデータパイプライン、SLOに基づく監視を動かす学習プロジェクト。すべてノートPC上で動作し、クラウドリソースは使っていない。"
stack: [Python (FastAPI), PostgreSQL, Docker, Kubernetes (kind), Kustomize, Helm, Prometheus, Grafana, Terraform, GitHub Actions]
role: 個人開発
date: "2026-11"
repo: https://github.com/santinocc/k8s-slo-pipeline-demo
cover: ../../../assets/projects/k8s-grafana-dashboard.png
coverAlt: "SLOのGrafanaダッシュボード：可用性100%、エラーバジェット残り100%、バーンレート0、発火中のアラートなし。リクエスト数、レイテンシ、APIレプリカ数のグラフ付き。"
translationStatus: draft
---

- **Kubernetes：** APIはDeploymentとして動作し、ヘルスチェックとレディネスプローブ、ダウンタイムなしのローリングアップデート、2〜6台のPodで自動スケールするHorizontalPodAutoscalerを備えています。
- **データパイプライン：** CronJobが5分ごとに生成したセンサーデータをPostgreSQLにアップサートします。再実行しても安全で、失敗した実行はリトライされます。
- **SLO：** 28日間でリクエストの99%が成功（5xx以外）することを目標とし、短期・長期の複数ウィンドウによるバーンレートアラートを設定。アラートルールはpromtoolでユニットテストし、アラートの発火と解消を記録したデモもあります。
- **品質：** GitHub Actionsでpushのたびにlint、ユニットテストと結合テスト、イメージのチェック、マニフェストの検証を実行。アーキテクチャ決定記録（ADR）とアラート対応手順書もリポジトリにあります。
