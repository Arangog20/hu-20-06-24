import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { UpdateWorkSpaceDto } from './dto/update-work-space.dto';

@Controller('work-space')
export class WorkSpaceController {
  constructor(private readonly workSpaceService: WorkSpaceService) {}

  @Post()
  create(@Body() createWorkSpaceDto: CreateWorkSpaceDto) {
    return this.workSpaceService.create(createWorkSpaceDto);
  }

  @Get()
  findAll() {
    return this.workSpaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workSpaceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkSpaceDto: UpdateWorkSpaceDto) {
    return this.workSpaceService.update(+id, updateWorkSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workSpaceService.remove(+id);
  }
}
