import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPostEntity } from '../books/models/books.entity';

import { UserController } from './user.controllers';
import { UserDetailsEntity } from './user.entities';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDetailsEntity]),
    TypeOrmModule.forFeature([ProductPostEntity]),
  ],
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
