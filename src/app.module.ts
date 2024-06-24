import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Room } from './tasks/rooms/entities/room.entity';
import { Users } from './tasks/user/entities/user.entity';
import { WorkSpace } from './tasks/work-space/entities/work-space.entity';
import { Reservation } from './tasks/reservations/entities/reservation.entity';
import { SessionEntity } from './tasks/sessions/entities/session.entity';
import { RoomsController } from './tasks/rooms/rooms.controller';
import { UserController } from './tasks/user/user.controller';
import { WorkSpaceController } from './tasks/work-space/work-space.controller';
import { ReservationsController } from './tasks/reservations/controllers/reservations.controller';
import { SessionsController } from './tasks/sessions/sessions.controller';
import { RoomsService } from './tasks/rooms/rooms.service';
import { UserService } from './tasks/user/user.service';
import { WorkSpaceService } from './tasks/work-space/work-space.service';
import { ReservationsService } from './tasks/reservations/services/reservations.service';
import { SessionsService } from './tasks/sessions/sessions.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Room,Users,WorkSpace,Reservation,SessionEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([Room,Users,WorkSpace,Reservation,SessionEntity]),
  
  ],

  controllers: [RoomsController,UserController,WorkSpaceController,ReservationsController,SessionsController],
  providers: [RoomsService,UserService,WorkSpaceService,ReservationsService,SessionsService],
})
export class AppModule {}
