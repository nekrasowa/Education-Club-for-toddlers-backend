import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column()
  email!: string;

  @Column()
  phone_number!: string;

  @Column()
  lesson_name!: string;

  @Column()
  lesson_description!: string;

  @Column()
  isVisible!: boolean;
}
