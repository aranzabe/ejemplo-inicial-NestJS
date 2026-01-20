import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import kleur from 'kleur';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');

  // app.useGlobalPipes(new ValidationPipe({  //Validación global
  //   whitelist: true, //Rechaza campos no definidos en el DTO
  //   forbidNonWhitelisted: true, //Lanza un error si hay campos extra
  //   transform: true //Convierte tipos automáticamente
  // }));

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    kleur.green('🌐 ') +
    kleur.green().bold('Application is running on: ') +
    kleur.cyan(await app.getUrl())
  );

}
bootstrap();
