import { Injectable, Inject } from '@nestjs/common';
import { Part } from './part.entity';
import { PartDto } from 'src/dto/part.dto';
import { PartsFilterOptions } from 'src/interfaces/filters';
import { ProductPartsService } from 'src/productparts/productparts.service';

@Injectable()
export class PartsService {
  @Inject(ProductPartsService) private readonly productPartsService: ProductPartsService

  constructor(
    @Inject('PARTS_REPOSITORY')
    private partsRepository: typeof Part,
  ) { }

  async findAll(filters: PartsFilterOptions): Promise<Part[]> {
    let part_ids = await this.productPartsService.getPartIdsByProductId(filters.product_id);
    return this.partsRepository.findAll<Part>({
      where: {
        id: part_ids
      }
    });
  }

  async findOne(id: string): Promise<Part> {
    let retVal = await this.partsRepository.findOne<Part>({
      where: {
        id: id
      }
    })
    let someval = await retVal.$get('products');
    return retVal;
    // return this.partsRepository.findOne<Manual>({
    //   where: {
    //     id: id
    //   }
    // })
  }

  create(createProductDto: PartDto): Promise<Part> {
    return this.partsRepository.create({
      name: createProductDto.name
    });
  }

  async updateOne(id: string, product: Part): Promise<any> {
    return this.partsRepository.update({
      name: product.name,
    }, {
      where: { id: id }
    })
  }
}