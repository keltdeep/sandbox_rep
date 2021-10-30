import {Entity, ManyToOne, Column, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../users/user.entity';

@Entity()
export class Ducks {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @Column()
  name: string;

  @Column()
  type: number;

  @Column('timestamp', {default: new Date()})
  createdDate: Date;
}
