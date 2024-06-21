import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateWorkSpaceDto {

  @IsNotEmpty()
  @IsNumber()
  workSpaceId: number;

  @IsNotEmpty()
  @IsNumber()
  row: number;

  @IsNotEmpty()
  @IsNumber()
  column: number;
}
