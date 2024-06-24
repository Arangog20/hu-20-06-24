import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateReservationDto } from '../dto/create-reservation.dto';
import { ReservationsService } from '../services/reservations.service';
import { UpdateReservationDto } from '../dto/update-reservation.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Create a reservation to the system.', description: 'Create a reservation to access the system.' })
  @ApiResponse({status: 201, description: 'Reservation created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the reservation is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the reservation.'})
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Find all the reservations of the system.', description: 'View all reservations registered in the system.' })
  @ApiResponse({status: 200, description: 'All Reservations were found successfully.'})
  @ApiResponse({status: 404, description: 'No Reservations were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the reservations.'})
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the reservations by ID of the system.', description: 'View a specific reservations registered in the database.' })
  @ApiResponse({status: 200, description: 'Reservations found successfully.',})
  @ApiResponse({status: 404, description: 'Reservations with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the reservations.'})
  findOne(@Param('id') id: number) {
    return this.reservationsService.findOne(+id);
  }

  /* @Get('available/:session_id/:room_id')
  async checkAvailability(
    @Param('session_id') sessionId: number,
    @Param('room_id') roomId: number,
  ) {
    return await this.reservationsService.available(sessionId, roomId);
  } */

    @Get('available-workspaces/room/:room_id/session/:session_id')
  async available(@Param('room_id') room_id: number, @Param('session_id') session_id: number) {
    return this.reservationsService.available(room_id, session_id);
  }
}
