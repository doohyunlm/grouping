import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  readonly no: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;
}
