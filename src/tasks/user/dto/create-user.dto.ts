import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  userId:number;

  @IsOptional()
  @IsString()
  name:string;
  
  @IsOptional()
  @IsString()
  lastName:string;

  @IsNotEmpty()
  @IsString()
  email:string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  phone:number;
}
