import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsOptional()
    @IsInt()
    phoneNumber: number;
}
