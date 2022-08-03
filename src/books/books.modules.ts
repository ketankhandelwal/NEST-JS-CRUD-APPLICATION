import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPostEntity } from './models/books.entity';
import { BooksControllers } from './books.controllers';
import { BooksServices } from './books.services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPostEntity])],
  controllers: [BooksControllers],
  providers: [BooksServices],
  exports: [BooksServices],
})
export class ProductModule {}
