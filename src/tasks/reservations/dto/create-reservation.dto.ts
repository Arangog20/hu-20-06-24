import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";
import { Status } from "../entities/reservation.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateReservationDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    name: 'id',
    type:'number',
    required: false,
    example: '85',
    description: 'id reservation',
  })
  reservationId: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty({
    name: 'id',
    type:'number',
    required: false,
    example: '85',
    description: 'id user',
  })
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
