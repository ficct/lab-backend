import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(
      'Facultad de Ingenieria en Ciencias de la Computacion y Telecomunicaciones',
    )
    .setDescription(
      'Bienvenido a la documentacion de la API utilizada para los sistemas de la facultad',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document);
  await app.listen(3000);
}
bootstrap();
