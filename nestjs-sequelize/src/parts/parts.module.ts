import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { partsProviders } from './parts.providers';
import { PartsController } from './parts.controller';
import { DatabaseModule } from 'src/database.module';
import { ProductPartsModule } from 'src/productparts/productparts.module';

@Module({
  imports: [DatabaseModule, ProductPartsModule],
  controllers: [PartsController],
  providers: [
    PartsService,
    ...partsProviders
  ],
  exports: [PartsService]
})
export class PartsModule { }