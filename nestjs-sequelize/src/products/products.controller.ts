import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  create(@Body() createProductDto: ProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Put(':id/parts/:part_id')
  associatePart(@Param('id') id: string, @Param('part_id') part_id: string, @Body() product: Product): Promise<any> {
    return this.productsService.associatePart(id, part_id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() product: Product): Promise<any> {
    return this.productsService.updateOne(id, product);
  }

}