import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Find all the users of the system.', description: 'View all users registered in the system.' })
  @ApiResponse({status: 200, description: 'All users were found successfully.'})
  @ApiResponse({status: 404, description: 'No users were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the users.'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the user by ID of the system.', description: 'View a specific user registered in the database.' })
  @ApiResponse({status: 200, description: 'User found successfully.',})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the user.'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

}
