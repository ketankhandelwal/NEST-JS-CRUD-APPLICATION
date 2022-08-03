import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';

import { Repository } from 'typeorm';
import { ProductPostEntity } from '../books/models/books.entity';
import { UserDetailsEntity } from './user.entities';
import { UserRegisterInterface } from './user.register.interface';

export type User = {
  id: number;
  name: string;
  username: any;
  password: any;
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDetailsEntity)
    private readonly UserRepository: Repository<UserDetailsEntity>,
    @InjectRepository(ProductPostEntity)
    private readonly feedPostRepository: Repository<ProductPostEntity>,
  ) {}

  async findOne(username: any, password: string): Promise<any> {
    console.log(username);
    const post = await this.UserRepository.findOne({
      where: {
        username: username,
      },
    });

    if (post.password === password) {
      return this.feedPostRepository.find();
    }

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  async finduser(email: string): Promise<any> {
    console.log(email);
    const post = await this.UserRepository.findOne({
      where: {
        email: email,
      },
    });
    console.log(post);
    if (post) return post;

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }

  insertUser(userRegistrationDetails: UserRegisterInterface): string {
    from(this.UserRepository.save(userRegistrationDetails));
    return UserDetailsEntity.name;
  }

  async updateUser(id: string, data: any): Promise<any> {
    return this.UserRepository.update(id, { password: data });
  }

  async update(id: string, data: any): Promise<any> {
    return await this.UserRepository.update(id, { password: data });
  }
}
