import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('UserEntity')
export class UserDetailsEntity {
  @Column({ default: '' })
  id: string;

  @PrimaryColumn({ type: 'real' })
  empID: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  username: string;

  @Column({ default: '' })
  password: string;

  @Column({ default: ' ' })
  status: string;

  @Column({ default: '' })
  createdBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: '' })
  updatedBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
