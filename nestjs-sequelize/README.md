# NestJs-sequelize backend

NestJs-sequelize backend depends on [Keycloak](../keycloak/README.md) to be running.

&nbsp;

## Initialize the database
- Run [migrations](../migrations/README.md) first.

&nbsp;

## Installation

```bash
$ npm install
```

&nbsp;

## Running with [local-dev](../profiles/local-dev/README.md)<a name="local-dev-instructions"></a>

### Set environment variables `nestjs-sequelize/.env`
```bash
# Postgres
DATABASE_HOST=localhost
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
```

### Start the application

```bash
$ npm start
# visit http://localhost:3000
```

&nbsp;

## Running with [local-full](../profiles/local-full/README.md)<a name="local-full-instructions"></a>

### Docker build
```bash
$ docker build -t products-backend .
```
