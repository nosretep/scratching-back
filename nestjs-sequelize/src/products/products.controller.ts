import { Body, Controller, Get, Param, Post, Put, HttpException, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(AuthenticatedGuard, RolesGuard)
@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @Roles('can-write')
  create(@Body() createProductDto: ProductDto, @Request() req): Promise<Product> {
    createProductDto.user_id = req.session.logged_in_user_id
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Roles('can-read')
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @Roles('can-read')
  async findOne(@Param('id') id: string): Promise<Product> {
    if (id === "fake-error") {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    // await new Promise(f => setTimeout(f, Number(id) * 1000));
    return this.productsService.findOne(id);
  }

  @Put(':id/parts/:part_id')
  @Roles('can-write')
  associatePart(@Param('id') id: string, @Param('part_id') part_id: string, @Body() product: Product): Promise<any> {
    return this.productsService.associatePart(id, part_id);
  }

  @Put(':id')
  @Roles('can-write')
  updateOne(@Param('id') id: string, @Body() product: Product): Promise<any> {
    return this.productsService.updateOne(id, product);
  }

}