import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Part } from './part.entity';
import { PartsService } from './parts.service';
import { PartDto } from 'src/dto/part.dto';
import { PartsFilterOptions } from 'src/interfaces/filters';

@Controller('api/parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) { }

  @Post()
  create(@Body() createPartDto: PartDto): Promise<Part> {
    return this.partsService.create(createPartDto);
  }

  @Get()
  findAll(@Query() query: PartsFilterOptions): Promise<Part[]> {
    return this.partsService.findAll({ product_id: query.product_id });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Part> {
    return this.partsService.findOne(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() part: Part): Promise<any> {
    return this.partsService.updateOne(id, part);
  }

}