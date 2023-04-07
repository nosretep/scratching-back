import { IsNotEmpty } from 'class-validator';
export class ManualDto {
    @IsNotEmpty()
    fulltext: string;

    @IsNotEmpty()
    product_id: string;
}