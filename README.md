
# Sample Web App Infrastructure

Sample web application using an Angular frontend and a NestJs with Sequelize ORM as a backend persisted by a Postgres database

## Docker full

### Build frontend and backend images
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
#   grafana
docker-compose -f docker-compose-open-telemetry.yml up
```

## Running locally for developing

### Docker compose minimal setup
```bash
# minimal integration
#   otel-collector (minimal)
#   keycloak (minimal)
docker-compose -f docker-compose-dev.yml up
```

### Running postgres db locally
```bash
# postgres
# Depends on a running postgres database that corresponds with the following database variables
```

### Start the frontend and backend
```bash
# backend
cd nestjs-sequelize
npm install
npm start
running at http://localhost:3000/products

# frontend
cd angular-frontend
npm install
npm start
visit http://localhost:4200/products
```

## Env variables for each setup
```bash
# .env file
# Integration of grafana and opsgenie
OPSGENIE_API_KEY=
# Integration of postgres and backend
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
# Integration of keycloak and backend
OAUTH2_CLIENT_PROVIDER_OIDC_ISSUER=
OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_ID=
OAUTH2_CLIENT_REGISTRATION_LOGIN_CLIENT_SECRET=
OAUTH2_CLIENT_REGISTRATION_LOGIN_SCOPE=
OAUTH2_CLIENT_REGISTRATION_LOGIN_REDIRECT_URI=
OAUTH2_CLIENT_REGISTRATION_LOGIN_POST_LOGOUT_REDIRECT_URI=
SESSION_SECRET=
```