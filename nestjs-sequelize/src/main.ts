import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // opt in to enabling cors
  const enable_cors: boolean = (process.env.ENABLE_CORS === 'true');
  if (enable_cors) {
    app.enableCors();
  }
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
