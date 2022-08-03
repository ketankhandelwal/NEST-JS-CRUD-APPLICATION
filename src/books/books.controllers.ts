import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { ProductInterfacePost } from './models/books.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BooksServices } from './books.services';

@Controller('books')
export class BooksControllers {
  constructor(private productServices: BooksServices) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addProduct(@Body() ProductPost: ProductInterfacePost): string {
    return this.productServices.insertBooks(ProductPost);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Observable<ProductInterfacePost[]> {
    return this.productServices.findAllProduct();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() ProductPost: ProductInterfacePost,
  ): Observable<UpdateResult> {
    return this.productServices.updateProduct(id, ProductPost);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.productServices.deleteProduct(id);
  }
}
