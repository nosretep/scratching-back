import { IsNotEmpty } from 'class-validator';
export class ProductPartDto {
    @IsNotEmpty()
    product_id: string;

    @IsNotEmpty()
    part_id: string;
}