import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, 
           ConfigModule.forRoot({
              isGlobal: true, // Esto carga automáticamente el .env usando dotenv por dentro. Disponible en toda la app
           }),
          ],
  controllers: [],
  providers: [],
})
export class AppModule {}

/*
En NestJS normalmente NO necesitas instalar dotenv directamente, porque:

@nestjs/config ya lo incluye internamente

Sin embargo, si necesitas funcionalidades específicas de dotenv que no están cubiertas por @nestjs/config, entonces podrías considerar instalar dotenv directamente.

Pero para la mayoría de los casos de uso en aplicaciones NestJS, @nestjs/config es suficiente y recomendado.



yarn add @nestjs/config

Y:
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // disponible en toda la app
    }),
  ],
})
export class AppModule {}


Esto carga automáticamente el .env usando dotenv por dentro.


*/