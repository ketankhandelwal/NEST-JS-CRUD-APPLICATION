import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserRegisterInterface } from './user.register.interface';
import { UserService } from './user.service';

@Controller('register')
export class UserController {
  constructor(private userServices: UserService) {}
  @Post()
  addUser(@Body() userRegistrationDetails: UserRegisterInterface): string {
    return this.userServices.insertUser(userRegistrationDetails);
  }
}
