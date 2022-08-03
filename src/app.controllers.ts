import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth/auth.service';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { BooksServices } from './books/books.services';

@Controller()
export class AppControllers {
  constructor(
    private readonly productServices: BooksServices,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }
}
