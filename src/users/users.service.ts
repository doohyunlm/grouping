import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
    return;
  }

  create(UserData: CreateUserDto) {
    return;
  }

  update(no: number, UserData) {
    return;
  }
}
