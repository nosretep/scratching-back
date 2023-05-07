# Sample Web App Infrastructure

This environment setup is to be used for making code changes to frontend and backend service code with minimal dependencies.
- [backend (nestjs-sequelize)](../../nestjs-sequelize/README.md)
- [frontend (angular-frontend)](../../angular-frontend/README.md)
- [keycloak](../../keycloak/README.md)
- otel-collector

&nbsp;

### Postgres & Migrations
- Must have postgres db running locally or remotely.
- Run [migrations](../../migrations/README.md) first.

&nbsp;

### Docker dev
```bash
$ docker-compose -f docker-compose.yml up
```

&nbsp;

### Running frontend and backend locally
- [Instructions for running NestJs-sequelize locally](../../nestjs-sequelize/README.md#local-dev-instructions)
- [Instructions for running AngularJs locally](../../angular-frontend/README.md#local-dev-instructions)

&nbsp;

### E2E testing
- [Cypress e2e testing](../../testing/README.md)