import { IsNotEmpty, IsString, MaxLength, IsStrongPassword,Matches, IsStrongPasswordOptions } from "class-validator";
export class CreateUserDto {

    @IsString()
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]{2,8}$/)
    @IsNotEmpty()
    readonly username: string;
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 3,
        minUppercase: 1,
        minSymbols:0
      } as IsStrongPasswordOptions)    
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;
}