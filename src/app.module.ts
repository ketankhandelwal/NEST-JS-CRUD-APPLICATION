import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppControllers } from './app.controllers';
import { AppService } from './app.service';
import { PasswordModule } from './password/password.module';
import { ProductModule } from './books/books.modules';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.LOCALHOST,
      port: 5432,
      username: 'postgres',
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductModule,
    PasswordModule,
  ],

  controllers: [AppControllers],
  providers: [AppService],
})
export class AppModule {}
