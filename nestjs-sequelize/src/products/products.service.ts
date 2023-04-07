import { Injectable, Inject } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from './product.entity';
import { ProductPartsService } from 'src/productparts/productparts.service';

@Injectable()
export class ProductsService {
  @Inject(ProductPartsService) private readonly productPartsService: ProductPartsService

  constructor(
    @Inject('PRODUCTS_REPOSITORY') private productsRepository: typeof Product
  ) { }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.findAll<Product>({
      order: [
        ['id', 'DESC']
      ],
      limit: 20
    });
  }

  async findOne(id: string): Promise<Product> {
    let retVal = await this.productsRepository.findOne<Product>({
      where: {
        id: id
      }
    })
    let someval = await retVal.$get('manual');
    return retVal;
  }

  create(createProductDto: ProductDto): Promise<Product> {
    return this.productsRepository.create({
      name: createProductDto.name
    });
  }

  async updateOne(id: string, product: Product): Promise<any> {
    return this.productsRepository.update({
      name: product.name
    }, {
      where: { id: id }
    })
  }

  async associatePart(id: string, part_id: string): Promise<any> {
    return this.productPartsService.create({
      product_id: id,
      part_id: part_id
    })
  }
}