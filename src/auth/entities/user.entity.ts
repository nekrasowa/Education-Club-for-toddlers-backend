import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Child } from '../../children/entities/child.entity';
import { Review } from '../../reviews/entities/review.entity';
import { UserRole } from '../../enums/user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({
    type: 'enum',
    enum: UserRole
  })
  role!: UserRole;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @OneToMany(() => Review, (review) => review.user_id)
  reviews!: Review[];

  @OneToMany(() => Child, (child) => child.parent)
  children!: Child[];
}
