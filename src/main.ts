import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Learning Experience Platform API')
    .setDescription('The Learning Experience Platform API description') //need more info
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDoc', app, document);

  // await app.listen(3000);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
