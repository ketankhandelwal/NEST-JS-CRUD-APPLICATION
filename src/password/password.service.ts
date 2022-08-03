import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { PasswordResetEntityClass } from './password.entities';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(PasswordResetEntityClass)
    private readonly passwordRepo: Repository<PasswordResetEntityClass>,
  ) {}

  async create(body: any) {
    return this.passwordRepo.save(body);
  }

  async findToken(data: any) {
    return this.passwordRepo.findOne(data);
  }
}
