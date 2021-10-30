import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
const cookieParser = require('cookie-parser');

import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Sandbox example')
    .setDescription('Sandbox api')
    .setVersion('1.0')
    .addTag('sandbox')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });
  await app.listen(3001);
}
bootstrap();
