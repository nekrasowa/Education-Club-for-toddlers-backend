import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserMessage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;
  
  @Column()
  last_name!: string;
  
  @Column()
  email!: string;
  
  @Column({ type: 'varchar', nullable: true })
  phone_number?: string | undefined;
  
  @Column()
  message_text!: string;
}
