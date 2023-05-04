# Sample Web App Infrastructure

Sample full stack web application

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

### Docker-compose
```bash
# open-telemetry integration
#   postgres
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
DATABASE_HOST=
DATABASE_PORT=
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
OPSGENIE_API_KEY=
ALERTMANAGER_OPSGENIE_API_KEY=
```