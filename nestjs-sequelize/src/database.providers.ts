import { Sequelize } from 'sequelize-typescript';
import { Product } from './products/product.entity';
import { Manual } from './manuals/manual.entity'
import { Part } from './parts/part.entity';
import { ProductPart } from './productparts/productpart.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([Product, Manual, Part, ProductPart]);
      await sequelize.sync();
      return sequelize;
    },
  },
];