# Sample Web App Infrastructure

This environment setup is to be used for adjusting provisioning files/configs/scripts with the whole system.

## Docker full

### Docker build frontend and backend images
```bash
# backend
# from nestjs-sequelize directory
docker build -t products-backend .

# frontend
# from angular-frontend directory
npm run build
docker build -t products-frontend .
```

### Postgres & Migrations
- Must have postgres db running locally or remotely. 
- `.env` variables prefixed with `DATABASE_` below.
- Run [migrations](migrations/README.md) first.

### Docker-compose
```bash
# open-telemetry integration
#   backend (nestjs-sequelize)
#   frontend (angular-frontend)
#   keycloak
#   otel-collector
#   jaeger
#   prometheus
#   blackbox-exporter
#   alertmanager
#   grafana
docker-compose -f docker-compose.yml up
```

### Env variables `local-full/.env`
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
