import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSessionDto {

  @IsOptional()
  @IsNumber()
  sessionId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  startTime: Date;

  @IsDate()
  endTime: Date;
}
