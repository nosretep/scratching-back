
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
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=test1234
export DATABASE_NAME=somedb
docker-compose -f docker-compose-open-telemetry.yml up
```
### Minimal docker integration
```bash
# minimal integration
#   postgres
#   backend (nestjs-sequelize)
#   frontend (angular-frontend)
#   otel-collector (minimal)
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=test1234
export DATABASE_NAME=somedb
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
export DATABASE_HOST=localhost
export DATABASE_PORT=5432
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=test1234
export DATABASE_NAME=somedb
npm start
running at http://localhost:3000/products

# frontend
cd angular-frontend
npm install
npm start
visit http://localhost:4200/products
```