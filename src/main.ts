import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedocModule, RedocOptions } from 'nestjs-redoc';
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
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
  });
  const redocOptions: RedocOptions = {
    title: 'LabSystem API ',
    logo: {
      url: 'https://redocly.github.io/redoc/petstore-logo.png',
      backgroundColor: '#F0F0F0',
      altText: 'LabSystem Logo',
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    noAutoAuth: true,
    pathInMiddlePanel: true,
    auth: {
      enabled: true,
      user: 'admin',
      password: '123',
    },
  };
  await RedocModule.setup('docs', app, document, redocOptions);
  await app.listen(3000);
}
bootstrap();
