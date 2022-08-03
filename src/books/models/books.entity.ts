import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ProductPost')
export class ProductPostEntity {
  @PrimaryColumn({ type: 'real' })
  id: string;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  author: string;

  @Column({ type: 'real', default: 0 })
  price: string;

  @Column({ default: '' })
  borrowedBy: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  borrowedOn: Date;

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
