import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Session")
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create a session to the system.', description: 'Create a session to access the system.' })
  @ApiResponse({status: 201, description: 'Session created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the session is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the session.'})
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Get('/all')
  @ApiOperation({ summary: 'Find all the sessions of the system.', description: 'View all session registered in the system.' })
  @ApiResponse({status: 200, description: 'All sessions were found successfully.'})
  @ApiResponse({status: 404, description: 'No sessions were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the session.'})
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find relation between workspace and session  ', description: 'List of workspaces assigned to a session' })
  @ApiResponse({status: 200, description: 'All sessions were found successfully.'})
  @ApiResponse({status: 404, description: 'No sessions were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the session.'})
  findAsingSession(@Param('id') id: number) {
    return this.sessionsService.findAsingSession(+id);
  }

  @Get('id/:id')
  @ApiOperation({ summary: 'Find the session by ID of the system.', description: 'View a specific session registered in the database.' })
  @ApiResponse({status: 200, description: 'Session found successfully.',})
  @ApiResponse({status: 404, description: 'Session with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the session.'})
  findOne(@Param('id') id: number) {
    return this.sessionsService.findAsingSession(+id);
  }

}
