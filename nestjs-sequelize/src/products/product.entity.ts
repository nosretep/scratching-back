import { Table, Column, Model, BelongsTo, ForeignKey, HasOne, BelongsToMany, Index } from 'sequelize-typescript';
import { Manual } from 'src/manuals/manual.entity';
import { Part } from 'src/parts/part.entity';
import { ProductPart } from 'src/productparts/productpart.entity';

@Table({tableName: 'products'})
export class Product extends Model {
  @Index
  @Column
  name: string;

  @Column
  description: string;

  @HasOne(() => Manual, { foreignKey: 'product_id' })
  manual: Manual;

  @BelongsToMany(() => Part, () => ProductPart)
  parts: Part[];
}