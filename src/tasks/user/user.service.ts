import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
  private userRepositoy:Repository<Users>) {}

  async findAll() {
    const user = await this.userRepositoy.find();
    if (!user) {
      throw new NotFoundException(`space not found`);
    }
    return user;
  }

  async findOne(user_id: number) {
    const userId = await this.userRepositoy.findOne({where: {user_id: user_id}});
    if(!userId){
      throw new NotFoundException(`workspace #${user_id} not found`);
    }
    return userId;
  }

 

 
}
