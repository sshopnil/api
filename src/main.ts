import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://localhost:3000", "http://localhost:8080", "http://localhost:4200" ]
  })

  const options = new DocumentBuilder()
  .setTitle('SoilSociety Api Doc')
  .setDescription('This includes all the api documnet in this app')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(3000, ()=>console.log("connected to port 3000"));

}
bootstrap();
