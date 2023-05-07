# Sample Web App Infrastructure

This environment setup is to be used for adjusting provisioning files/configs/scripts with the whole system.
- [backend (nestjs-sequelize)](../../nestjs-sequelize/README.md)
- [frontend (angular-frontend)](../../angular-frontend/README.md)
- [keycloak](../../keycloak/README.md)
- otel-collector
- jaeger
- prometheus
- blackbox-exporter
- [alertmanager](../../alertmanager/README.md)
- grafana

&nbsp;

### Postgres & Migrations
- Must have postgres db running locally or remotely.
- Run [migrations](../../migrations/README.md) first.

&nbsp;

### Docker build backend and frontend images
- [Instructions for building NestJs-sequelize backend image](../../nestjs-sequelize/README.md#local-full-instructions)
- [Instructions for building AngularJs frontend image](../../angular-frontend/README.md#local-full-instructions)

&nbsp;

### Docker-compose
```bash
$ docker-compose -f docker-compose.yml up
```

&nbsp;

### E2E testing
- [Cypress e2e testing](../../testing/README.md)

&nbsp;

### Env variables `profiles/local-full/.env`
```bash
# Postgres
DATABASE_HOST=docker.for.mac.host.internal
DATABASE_PORT=5432
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
# Keycloak
OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER=http://keycloak:8787/realms/nestjs
OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID=nestjs-client
OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET=
OAUTH2_CLIENT_REGISTRATION_LOGIN_SCOPE=
OAUTH2_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI=http://localhost:4200/auth/callback
OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI=http://localhost:4200/
SESSION_SECRET=
# Opsgenie
GRAFANA_OPSGENIE_API_KEY=
ALERTMANAGER_OPSGENIE_API_KEY=
```
