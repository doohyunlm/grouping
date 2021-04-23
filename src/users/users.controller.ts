import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entitiy';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get('/:no')
  getOne(@Param('no') userNo: number): User {
    return this.usersService.getOne(userNo);
  }

  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @Delete('/:no')
  remove(@Param('no') userNo: number) {
    return this.usersService.deleteOne(userNo);
  }

  @Patch('/:no')
  patch(@Param('no') userNo: number, @Body() updateData) {
    return this.usersService.update(userNo, updateData);
  }
}
