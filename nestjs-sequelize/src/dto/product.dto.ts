import { IsNotEmpty } from 'class-validator';
export class ProductDto {
    @IsNotEmpty()
    name: string;

    // @IsNotEmpty()
    user_id: number;
}
