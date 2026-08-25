import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @ManyToOne(() => User, (user) => user.children, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'parent_id' })
  parent!: User;

  @Column({ type: 'int' })
  parent_id!: number;
}
