
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
docker run --name pgsql-dev -p 5432:5432 \
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
    --rm products-backend
running at http://localhost:3000/products

# frontend
docker run --name products-frontend -p 8080:80 \
    --rm products-frontend
visit http://localhost:8080/products
```

### Docker Compose
```bash
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=test1234
export DATABASE_NAME=somedb
docker-compose -f docker-compose-angular-nestjs-sequelize-postgres.yml up
visit http://localhost:8080/products
```