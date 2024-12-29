import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Task Manager API')
      .setDescription('API para gestionar tareas')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    console.log('Swagger habilitado en /api');
  } else {
    console.log('Swagger deshabilitado en producción');
  }

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Aplicación corriendo en el puerto ${port}`);
}
bootstrap();
