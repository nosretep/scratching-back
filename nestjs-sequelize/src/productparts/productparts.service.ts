import { Injectable, Inject } from '@nestjs/common';
import { ProductPartDto } from 'src/dto/productpart.dto';
import { ProductPart } from 'src/productparts/productpart.entity';

@Injectable()
export class ProductPartsService {

    constructor(
        @Inject('PRODUCT_PARTS_REPOSITORY')
        private productPartsRepository: typeof ProductPart
    ) { }

    async getPartIdsByProductId(product_id: string): Promise<string[]> {
        let part_ids: string[] = [];
        let product_parts;
        product_parts = await this.productPartsRepository.findAll<ProductPart>({
            where: {
                product_id: product_id
            }
        })
        part_ids = product_parts.reduce((a, currentValue) =>
            [...a, currentValue.part_id], part_ids);
        return part_ids;
    }

    create(createProductPartDto: ProductPartDto): Promise<ProductPart> {
        return this.productPartsRepository.create({
            product_id: createProductPartDto.product_id,
            part_id: createProductPartDto.part_id
        });
    }

}