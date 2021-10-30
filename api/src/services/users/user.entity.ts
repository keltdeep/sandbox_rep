import {Entity, BeforeInsert, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('timestamp', {default: new Date()})
  createdDate: Date;
}
