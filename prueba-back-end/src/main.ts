import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './application/app.module';
import { CustomLoggerService } from './shared/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: ['log', 'error', 'warn', 'debug', 'verbose']
    // logger: new CustomLoggerService()
  });

  app.enableCors();
  // app.useLogger( app.get(CustomLoggerService))

  const options = new DocumentBuilder()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
