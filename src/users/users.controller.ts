import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('/:user_no')
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, description: 'user not found.' })
  getOne(@Param('user_no') userNo: number): Promise<User> {
    return this.usersService.findOne(userNo);
  }

  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() userData: CreateUserDto): Promise<User> {
    return this.usersService.create(userData);
  }

  @Delete('/:user_no')
  remove(@Param('user_no') userNo: number) {
    return this.usersService.remove(userNo);
  }

  @ApiBody({ type: UpdateUserDto })
  @Put('/:user_no')
  update(@Param('user_no') userNo: number, @Body() updateData: UpdateUserDto) {
    return this.usersService.update(userNo, updateData);
  }
}
