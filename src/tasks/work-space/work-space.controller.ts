import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkSpaceService } from './work-space.service';
import { CreateWorkSpaceDto } from './dto/create-work-space.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('work-space')
export class WorkSpaceController {
  constructor(private readonly workSpaceService: WorkSpaceService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create a workspace to the system.', description: 'Create a workspace to access the system.' })
  @ApiResponse({status: 201, description: 'Workspace created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the workspace is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the workspace.'})
  create(@Body() createWorkSpaceDto: CreateWorkSpaceDto) {
    return this.workSpaceService.create(createWorkSpaceDto);
  }

  @Get('/space')
  @ApiOperation({ summary: 'Find all the workspaces of the system.', description: 'View all workspace registered in the system.' })
  @ApiResponse({status: 200, description: 'All workspaces were found successfully.'})
  @ApiResponse({status: 404, description: 'No workspaces were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the workspace.'})
  findAll() {
    return this.workSpaceService.findAll();
  }

  @Get(':id')
  findAsingUser(@Param('id') id: number) {
    return this.workSpaceService.findAsingUser(+id);
  }

  @Get('id/:id')
  @ApiOperation({ summary: 'Find the workspace by ID of the system.', description: 'View a specific workspace registered in the database.' })
  @ApiResponse({status: 200, description: 'workspace found successfully.',})
  @ApiResponse({status: 404, description: 'workspace with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the workspace.'})
  findOne(@Param('id') id: number) {
    return this.workSpaceService.findOne(+id);
  }

  @Get('/session/:id')
  findAsingSession(@Param('id') id: number) {
    return this.workSpaceService.findAsingSession(+id);
  }

}
