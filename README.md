
# Sample Apps Using Some Latest Web Stack Frameworks

Sample web application using an Angular frontend and a NestJs with Sequelize ORM as a backend persisted by a Postgres database

## Running locally
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
export ENABLE_CORS=true
npm start
running at http://localhost:3000/products

# frontend
cd angular-frontend
npm install
npm start
visit http://localhost:4200/products
```

## Using Docker

### Build Images
```bash
# postgres
docker pull Postgres

# backend
# from nestjs-sequelize directory
docker build -t products-backend .

# frontend
# from angular-frontend directory
docker build -t products-frontend .
```

### Run Containers
```bash
# postgres
docker run --name postgres -p 5432:5432 \
    -e POSTGRES_PASSWORD=test1234 \
    -e POSTGRES_DB=somedb \
    --rm postgres

# backend
docker run --name products-backend -p 3000:3000 \
    -e DATABASE_HOST=172.17.0.1 \
    -e DATABASE_PORT=5432 \
    -e DATABASE_USERNAME=postgres \
    -e DATABASE_PASSWORD=test1234 \
    -e DATABASE_NAME=somedb \
    -e ENABLE_CORS=true \
    -e OTLP_TRACE_EXPORTER_HOST=172.17.0.1 \
    --rm products-backend
running at http://localhost:3000/products

# frontend
docker run --name products-frontend -p 8080:80 \
    --rm products-frontend
visit http://localhost:8080/products

# jaeger
docker run --name jaeger \
  -e COLLECTOR_OTLP_ENABLED=true \
  -p 16686:16686 \
  -p 4317:4317 \
  -p 4318:4318 \
  --rm jaegertracing/all-in-one:1.35
visit http://localhost:16686/
```

### Docker Compose
```bash
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=test1234
export DATABASE_NAME=somedb
export ENABLE_CORS=true
docker-compose -f docker-compose-angular-nestjs-sequelize-postgres.yml up
# frontend
visit http://localhost:8080/products
# jaeger
visit http://localhost:16686/
```