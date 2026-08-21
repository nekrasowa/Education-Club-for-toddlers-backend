import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { User } from '../../auth/entities/user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  user_id!: number;

  @Column()
  user_name!: string;

  @Column()
  child_name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @Column()
  text!: string;

  @Column()
  isVisible!: boolean;

  @ManyToOne(() => User, (user) => user.reviews, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
