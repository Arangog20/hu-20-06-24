import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateRoomDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    roomId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    row_num: number;
    
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    column_num: number;
}
