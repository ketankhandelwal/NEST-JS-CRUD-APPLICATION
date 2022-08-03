import { PasswordService } from './password.service';
import { PasswordController } from './password.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordResetEntityClass } from './password.entities';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PasswordResetEntityClass]),
    MailerModule.forRoot({
      transport: {
        host: '0.0.0.0',
        port: 1025,
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
    UserModule,
  ],
  providers: [PasswordService],
  controllers: [PasswordController],
})
export class PasswordModule {}
