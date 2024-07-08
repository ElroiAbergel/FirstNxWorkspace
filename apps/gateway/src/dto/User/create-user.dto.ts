import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsStrongPassword,
  Matches,
  IsStrongPasswordOptions,
  IsEmail,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsEmail({})
  @MaxLength(20)
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]{2,8}$/)
  @IsNotEmpty()
  readonly username: string;
  @IsNotEmpty()
   password: string;

  salt: string;
}
