import { IsOptional, IsString } from "class-validator";

export class UserQueryDto {
    @IsString()
    @IsOptional()
    preferred_username?: string;

    @IsString()
    @IsOptional()
    name?: string;
}