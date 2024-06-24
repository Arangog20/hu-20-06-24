import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkSpace } from './entities/work-space.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkSpaceService {
constructor(
  @InjectRepository(WorkSpace)
  private workSpaceRepository: Repository<WorkSpace>
){}

 async create(createWorkSpaceDto: CreateWorkSpaceDto): Promise<WorkSpace> {
    const { workspace_Id ,position_row,position_column} = createWorkSpaceDto;

    const newWorkSpace = new WorkSpace();
    newWorkSpace.workspace_id = workspace_Id;
    newWorkSpace.position_row = position_row;
    newWorkSpace.position_column = position_column;

    const createWorkSpace = await this.workSpaceRepository.save(newWorkSpace);

    return createWorkSpace;
  }

  async findAll() {
    const space = await this.workSpaceRepository.find();
    if (!space) {
      throw new NotFoundException(`space not found`);
    }
    return space;
  }

  async findOne(workspace_id: number) {
    const sessionId = await this.workSpaceRepository.findOne({where: {workspace_id: workspace_id}});
    if(!sessionId){
      throw new NotFoundException(`workspace #${workspace_id} not found`);
    }
    return sessionId;
  }


  async findAsingUser(workspace_id: number) {
    const space = await this.workSpaceRepository.findOne({ where: { workspace_id }, relations: ['reservation','reservation.user_id'] });
    if (!space) {
      throw new NotFoundException(`space #${workspace_id} not found`);
    }
    return space;
   }

   async findAsingSession(workspace_id: number) {
    const space = await this.workSpaceRepository.findOne({ where: { workspace_id }, relations: ['reservation.session_id'] });
    if (!space) {
      throw new NotFoundException(`space #${workspace_id} not found`);
    }
    return space;
   }

  
}
