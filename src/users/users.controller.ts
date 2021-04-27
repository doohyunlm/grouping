import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
@ApiBearerAuth()
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') userid: number): Promise<User> {
    return this.usersService.findOne(userid);
  }

  @Post()
  create(@Body() userData: CreateUserDto): Promise<User> {
    return this.usersService.create(userData);
  }

  @Delete('/:id')
  remove(@Param('id') userid: number) {
    return this.usersService.remove(userid);
  }

  @Put('/:id')
  update(@Param('id') userid: number, @Body() updateData) {
    return this.usersService.update(userid, updateData);
  }
}
