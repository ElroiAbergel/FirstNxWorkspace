import { PartialType } from '@nestjs/mapped-types';
import { CreateNetflixDto } from './create-netflix.dto';
export class UpdateNetflixDto extends PartialType(CreateNetflixDto) {}