import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSessionDto {

  @IsOptional()
  @IsNumber()
  session_id: number;

  @IsString()
  @IsNotEmpty()
 session_name: string;

  @IsDate()
  start_time: Date;

  @IsDate()
  end_time: Date;
}
