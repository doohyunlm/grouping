import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  create(UserData: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = UserData.name;
    user.user_id = UserData.user_id;
    user.password = UserData.password;

    return user.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: number): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async update(id: number, updateData: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return;
  }
}
