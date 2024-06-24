import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository (Room)
    private readonly roomRepository: Repository<Room>
  ){}
  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const { room_name, row_num, column_num } = createRoomDto;

    const newRoom = new Room();
    newRoom.room_name = room_name;
    newRoom.row_num= row_num;
    newRoom.column_num = column_num;

    const createdSession = await this.roomRepository.save(newRoom);

    return createdSession;
  }
  findAll() {
    try{
      const room = this.roomRepository.find();
      return room;
    }catch{
      throw new NotFoundException(`session not found`);
    }
  }

  async findOne(room_id: number) {
    const roomId = await this.roomRepository.findOne({where: {room_id}});
    if(!roomId){
      throw new NotFoundException(`session #${room_id} not found`);
    }
    return roomId;
  }



  
}
