# Sample Web App Infrastructure

This environment setup is to be used for making code changes to frontend and backend service code with minimal dependencies.

## Docker dev
```bash
# minimal integration
#   otel-collector (minimal)
#   keycloak (minimal)
docker-compose -f docker-compose.yml up
```

### Postgres & Migrations
- Must have postgres db running locally or remotely. 
- `.env` variables prefixed with `DATABASE_` below.
- Run [migrations](../../migrations/README.md) first.

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

### Env variables `nestjs-sequelize/.env`
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
