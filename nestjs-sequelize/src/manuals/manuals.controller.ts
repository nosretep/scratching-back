import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ManualDto } from 'src/dto/manual.dto';
import { Manual } from './manual.entity';
import { ManualsService } from './manuals.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@UseGuards(AuthenticatedGuard)
@Controller('api/manuals')
export class ManualsController {
  constructor(private readonly manualsService: ManualsService) {}

  @Post()
  create(@Body() createManualDto: ManualDto): Promise<Manual> {
    return this.manualsService.create(createManualDto);
  }

  @Get()
  findAll(): Promise<Manual[]> {
    return this.manualsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Manual> {
    return this.manualsService.findOne(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() manual: Manual): Promise<any> {
    return this.manualsService.updateOne(id, manual);
  }

}