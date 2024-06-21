import { IsBoolean, IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";
import { Status } from "../entities/reservation.entity";

export class CreateReservationDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  reservationId: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  sessionId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  workSpaceId: number;

  @IsNotEmpty()
  @IsDate()
  reservationDate: Date;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
}
