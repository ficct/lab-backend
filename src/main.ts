import { NestFactory } from '@nestjs/core';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const config = new DocumentBuilder()
  .setTitle(
    'Facultad de Ingeniería en Ciencias de la Computación Telecomunicaciones',
  )
  .setDescription(
    'Bienvenido a la documentacion de la API utilizada para los sistemas de la facultad',
  )
  .setVersion('1.0')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
