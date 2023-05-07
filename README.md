
# Sample Web App Infrastructure

Sample web app using Angular frontend and NestJs backend.

[**Angular**](../../angular-frontend/README.md) frontend

[**NestJs**](../../nestjs-sequelize/README.md) backend

**Sequelize** ORM also used for migrations

[**Keycloak**](../../keycloak/README.md) OIDC provider

**OpenTelemetry** Otel Collector for collecting traces and spans

**Jaeger** for viewing collected traces and spans

**Prometheus** for collecting and querying metrics, and configuring alerts

[**AlertManager**](../../alertmanager/README.md) for integrations with incident response tools (Opsgenie)

**Grafana** for dashboards and viewing metrics

**Blackbox-Exporter** for converting basic http(s) healthchecks into metrics

&nbsp;

# Development flows

[`local-dev`](profiles/local-dev/README.md) profile to be used when developing frontend or backend features.

[`local-full`](profiles/local-full/README.md) profile is for launching all the services together.
