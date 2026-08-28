import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Нові імпорти

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Базові налаштування Swagger
  const config = new DocumentBuilder()
    .setTitle('PC Health Monitor API')
    .setDescription('Документація для бекенду телеметрії')
    .setVersion('1.0')
    .build();

  // Створення документа і підключення до шляху '/api'
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
