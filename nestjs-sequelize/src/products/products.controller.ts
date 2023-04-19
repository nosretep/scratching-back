import { Body, Headers, Controller, Get, Param, Post, Put, HttpException, HttpStatus } from '@nestjs/common';
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
  async findOne(@Param('id') id: string): Promise<Product> {
    if (id === "fake-error") {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    await new Promise(f => setTimeout(f, Number(id) * 1000));
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