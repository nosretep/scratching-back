# Migrations, Sequelize CLI, sequelize.sync()

* There are two methods to initially setup the database schema: using `sequelize-cli` and using `sequelize.sync()`.
* During development of a feature `sequelize.sync()` can be used to alter the schema to follow along with the models/entities/dto changes.

* All stages after development, however, alerting the schema should be accomplished with `sequelize-cli`.

* It's easy for the `sequelize-cli` and using `sequelize.sync()` schemas to be out of sync. In order to reconcile the differences,create two databases using the two methods. Then `pgAdmin > Schema Diff` the resulting schemas, and then adjust either the nestjst-sequelize models or adjust the migration scripts until they both result in the same schema.

* No model/entity/dto changes should be meged into main without also adjusting for migration changes.

&nbsp;

### **Migration**: using `sequelize-cli`
* used during migrations and deploys
* use at all stages of development
* create `migrations/.env` file with environment variables below
```bash
$ npm install
$ npx sequelize-cli db:migrate
```

&nbsp;

### **Migration**: using `sequelize.sync()`
* Simply starting the [nestjs-sequelize](../nestjs-sequelize/README.md) app will run `sequelize.sync()`, and this will *automagically* update the database schema
* convenient in development while building out backend models
* use only at local stages of development
* follow steps for running [nestjs-sequelize](../nestjs-sequelize/README.md) app, while adding the following environment variable
```bash
$ SEQUELIZE_RUN_SYNC=true
```

&nbsp;

### Env variables `migrations/.env`
```bash
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```