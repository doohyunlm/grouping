import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entitiy';

@Injectable()
export class UsersService {
  getAll(): User[] {
    return;
  }

  getOne(no: number): User {
    return;
  }

  deleteOne(no: number): void {
    this.getOne(no);
    return;
  }

  create(UserData: CreateUserDto) {
    return;
  }

  update(no: number, updateData: UpdateUserDto) {
    this.getOne(no);
    return;
  }
}
