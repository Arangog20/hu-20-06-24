import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Create a room to the system.', description: 'Create a room to access the system.' })
  @ApiResponse({status: 201, description: 'Room created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the room is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the room.'})
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Find all the room of the system.', description: 'View all room registered in the system.' })
  @ApiResponse({status: 200, description: 'All room were found successfully.'})
  @ApiResponse({status: 404, description: 'No room were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the room.'})
  findAll() {
    return this.roomsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the room by ID of the system.', description: 'View a specific room registered in the database.' })
  @ApiResponse({status: 200, description: 'Room found successfully.',})
  @ApiResponse({status: 404, description: 'Room with the entered ID not found.'})
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(+id);
  }

}
