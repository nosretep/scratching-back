import { IsNotEmpty } from 'class-validator';
export class PartDto {
    @IsNotEmpty()
    name: string;
}
