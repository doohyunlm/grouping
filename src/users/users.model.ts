import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  user_no: number;

  @Column
  name: string;

  @Column
  user_id: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  use_yn: boolean;
}
