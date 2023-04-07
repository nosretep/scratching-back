import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ManualsModule } from './manuals/manuals.module';
import { PartsModule } from './parts/parts.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, ManualsModule, PartsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}