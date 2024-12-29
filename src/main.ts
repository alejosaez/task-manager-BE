import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API para gestionar tareas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  console.log('Swagger habilitado en /api');

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Aplicación corriendo en el puerto ${port}`);
}

bootstrap();
