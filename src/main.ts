import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Заказ на погребальное меню')
      .setDescription('Документанция по RestApi')
      .setVersion('1.0.0')
      .addTag('Borel')
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)
  // app.useGlobalGuards(JwtAuthGuard)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
