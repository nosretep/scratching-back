import { Module } from '@nestjs/common';
import { ProductPartsService } from './productparts.service';
import { productPartsProviders } from './productparts.providers';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ProductPartsService,
    ...productPartsProviders
  ],
  exports: [ProductPartsService]
})
export class ProductPartsModule { }