
# Sample Apps Using Some Latest Web Stack Frameworks

Sample web application using an Angular frontend and a NestJs with Sequelize ORM as a backend persisted by a Postgres database

## Using Docker

### Build Images
```bash
# backend
# from nestjs-sequelize directory
docker build -t products-backend .

# frontend
# from angular-frontend directory
docker build -t products-frontend .
```

### Open-telemetry docker integration
```bash
# open-telemetry integration
#   postgres
#   backend (nestjs-sequelize)
#   frontend (angular-frontend)
#   otel-collector
#   jaeger
#   prometheus
#   grafana
docker-compose -f docker-compose-open-telemetry.yml up
```
### Minimal docker integration
```bash
# minimal integration
#   postgres
#   backend (nestjs-sequelize)
#   frontend (angular-frontend)
#   otel-collector (minimal)
docker-compose -f docker-compose-minimal.yml up
```

## Running locally
_this will result in proxy/network errors (console/terminal), but still usable_
```bash
# postgres
Depends on a running postgres database that corresponds with the following database variables

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

```bash
# .env file
OPSGENIE_API_KEY=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```