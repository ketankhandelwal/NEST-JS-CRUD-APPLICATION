import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  validateUser(username: string, password: string): Promise<string> {
    const user = this.usersService.findOne(username, password);

    return user;
  }

  async login(user: any) {
    const payload = { name: user.username, sub: user.empID };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
