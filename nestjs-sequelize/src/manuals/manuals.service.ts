import { Inject, Injectable } from "@nestjs/common";
import { ManualDto } from "src/dto/manual.dto";
import { Manual } from "./manual.entity";

@Injectable()
export class ManualsService {
  constructor(
    @Inject('MANUALS_REPOSITORY')
    private manualsRepository: typeof Manual
  ) {}

  async findAll(): Promise<Manual[]> {
    return this.manualsRepository.findAll<Manual>();
  }

  async findOne(id: string): Promise<Manual> {
    let retVal = await this.manualsRepository.findOne<Manual>({
      where: {
        id: id
      }
    })
    console.log(retVal.product);
    console.log(retVal);
    return retVal;
    // return this.manualsRepository.findOne<Manual>({
    //   where: {
    //     id: id
    //   }
    // })
  }

  async updateOne(id: string, manual: Manual): Promise<any> {
      return this.manualsRepository.update({
        fulltext: manual.fulltext,
      }, {
        where: { id: id }
      })
  }

  async create(createManualDto: ManualDto): Promise<Manual> {
    return this.manualsRepository.create({
      fulltext: createManualDto.fulltext,
      product_id: createManualDto.product_id
    });
  }
}