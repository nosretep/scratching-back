import { Module } from '@nestjs/common';
import { manualsProviders } from './manuals.providers';
import { DatabaseModule } from 'src/database.module';
import { ManualsController } from './manuals.controller';
import { ManualsService } from './manuals.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ManualsController],
  providers: [
    ManualsService,
    ...manualsProviders,
  ],
})
export class ManualsModule {}