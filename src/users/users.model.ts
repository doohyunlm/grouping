import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @ApiProperty({ example: 'doohyunlm', description: '이메일' })
  @Column
  user_id: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  use_yn: boolean;
}
