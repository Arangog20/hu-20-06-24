import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateWorkSpaceDto {

  @IsNotEmpty()
  @IsNumber()
  workspace_Id: number;

  @IsNotEmpty()
  @IsNumber()
  position_row: number;

  @IsNotEmpty()
  @IsNumber()
  position_column: string;
}
