import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PasswordReset')
export class PasswordResetEntityClass {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column({ unique: true })
  token: string;
}
