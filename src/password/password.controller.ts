import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { PasswordService } from './password.service';
import { MailerService } from '@nestjs-modules/mailer';
import { UserService } from '../user/user.service';
@Controller('password')
export class PasswordController {
  constructor(
    private passwordService: PasswordService,
    private mailerService: MailerService,
    private userService: UserService,
  ) {}

  @Post('forgot')
  async forgot(@Body('email') email: string, @Body('empID') empID: string) {
    const token = Math.random().toString(20).substring(4, 12);

    await this.passwordService.create({
      email,
      token,
      empID,
    });
    const url = `http://localhost:3000/reset/${token}`;

    await this.mailerService.sendMail({
      to: email,
      subject: 'Reset Password',
      html: `Click <a href="${url}">here </a> to reset your password`,
    });

    return {
      msg: 'please check your mail',
    };
  }

  @Post('reset')
  async reset(
    @Body('token') token: string,
    @Body('password') password: string,
    @Body('confirmPassword') confirmPassword: string,
  ) {
    if (password != confirmPassword)
      throw new BadRequestException('Pass not matched');

    const passwordReset: any = await this.passwordService.findToken({
      where: {
        token,
      },
    });

    const user = await this.userService.finduser(passwordReset.email);

    if (!user) throw new NotFoundException('Not found');

    await this.userService.update(user.empID, password);

    return {
      message: 'success',
    };
  }
}
