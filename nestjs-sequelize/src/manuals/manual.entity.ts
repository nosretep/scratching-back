import { Table, Column, Model, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';

@Table({tableName: 'manuals'})
export class Manual extends Model {
  @Column
  fulltext: string;

  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @BelongsTo(() => Product)
  product: Product;
}