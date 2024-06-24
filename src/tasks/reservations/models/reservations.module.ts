import { Module } from '@nestjs/common';
import { ReservationsService } from '../services/reservations.service';
import { ReservationsController } from '../controllers/reservations.controller';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
