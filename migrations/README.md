# Migrations with Sequelize CLI

* There are two methods to initially setup the database schema: using `sequelize-cli` and using `sequelize.sync()`
* During development, create two databases using the two methods below. Diff the resulting schemas, and then adjust either the nestjst-sequelize models or adjust the migration scripts until they both result in the same schema.
* No model/entity/dto changes should be made without also adjusting for migration changes.

## Migrations: using `sequelize-cli`
* used during migrations and deploys
* for production
* create `migrations/.env` file with environment variables below
```bash
# create and set .env variables
npm install
npx sequelize-cli db:migrate
```

## Migration: using `sequelize.sync()`
* convenient in development while building out backend models
* nestjs-sequelize app will 'automagically' update the database schema
* not for production
* follow steps for running [nestjs-sequelize](../nestjs-sequelize/README.md) app, and add following environment variable
```bash
SEQUELIZE_RUN_SYNC=true
```

### Env variables `migrations/.env`
```bash
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```