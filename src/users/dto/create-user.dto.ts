import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'doohyunlm@naver.com', description: '이메일' })
  @IsString()
  readonly user_id: string;

  @ApiProperty()
  @IsString()
  readonly password: string;
}
