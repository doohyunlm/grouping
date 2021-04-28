import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(user_no: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        user_no,
      },
    });

    if (!user) {
      throw new NotFoundException('user not found.');
    }

    return user;
  }

  async remove(user_no: number): Promise<void> {
    const user = await this.findOne(user_no);
    await user.destroy();
  }

  async update(user_no: number, updateData: UpdateUserDto): Promise<User> {
    const user = await this.findOne(user_no);
    return user.update(updateData);
  }
}
