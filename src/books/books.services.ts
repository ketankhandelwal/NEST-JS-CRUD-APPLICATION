import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductPostEntity } from './models/books.entity';
import { ProductInterfacePost } from './models/books.interface';
import { Product } from './books.models';
@Injectable()
export class BooksServices {
  constructor(
    @InjectRepository(ProductPostEntity)
    private readonly feedPostRepository: Repository<ProductPostEntity>,
  ) {}

  books: Product[] = [];

  insertBooks(ProductPost: ProductInterfacePost): string {
    from(this.feedPostRepository.save(ProductPost));
    return ProductPost.id;
  }

  findAllProduct(): Observable<ProductInterfacePost[]> {
    return from(this.feedPostRepository.find());
  }

  updateProduct(
    id: string,
    ProductPost: ProductInterfacePost,
  ): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, ProductPost));
  }

  deleteProduct(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}
