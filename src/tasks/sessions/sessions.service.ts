import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SessionEntity } from './entities/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>
  ) { }
  
  async create(createSessionDto: CreateSessionDto): Promise<SessionEntity> {
    const { session_name, start_time, end_time } = createSessionDto;

    const newSession = new SessionEntity();
    newSession.session_name = session_name;
    newSession.start_time = start_time;
    newSession.end_time = end_time;

    const createdSession = await this.sessionRepository.save(newSession);

    return createdSession;
  }

  findAll() {
    try{
      const session = this.sessionRepository.find();
      return session;
    }catch{
      throw new NotFoundException(`session not found`);
    }
  }

  async findOne(session_id: number) {
    const sessionId = await this.sessionRepository.findOne({where: {session_id}});
    if(!sessionId){
      throw new NotFoundException(`session #${session_id} not found`);
    }
    return sessionId;
  }


  async findAsingSession(session_id: number) {
    const space = await this.sessionRepository.findOne({ where: { session_id }, relations: ['reservation.workspace_id'] });
    if (!space) {
      throw new NotFoundException(`space #${session_id} not found`);
    }
    return space;
  }


}
