import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productsProviders } from './products.providers';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database.module';
import { ProductPartsModule } from 'src/productparts/productparts.module';

@Module({
  imports: [DatabaseModule, ProductPartsModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ...productsProviders,
  ],
  exports: [ProductsService]
})
export class ProductsModule { }