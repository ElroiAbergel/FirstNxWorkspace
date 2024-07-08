import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  maxLength,
} from 'class-validator';
export class CreateNetflixDto {
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly type: string;
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly director: string;
  @IsString()
  @IsNotEmpty()
  readonly cast: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly country: string;
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly date_added: string;
  @IsNumber()
  @MaxLength(4)
  @IsNotEmpty()
  readonly release_year: string;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly rating: string;
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  readonly duration: string;

  readonly listed_in: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsUrl()
  @MaxLength(100)
  @IsNotEmpty()
  readonly Image_URL: string;
}
