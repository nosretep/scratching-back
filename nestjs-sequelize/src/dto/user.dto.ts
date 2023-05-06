import { IsEmail, IsNotEmpty } from 'class-validator';
export class UserDto {
    @IsNotEmpty()
    sub: string;

    @IsNotEmpty()
    preferred_username: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    given_name: string;

    @IsNotEmpty()
    family_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    email_verified: boolean;

    @IsNotEmpty()
    user_id: number;
}