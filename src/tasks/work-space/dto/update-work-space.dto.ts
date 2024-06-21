import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkSpaceDto } from './create-work-space.dto';

export class UpdateWorkSpaceDto extends PartialType(CreateWorkSpaceDto) {}
