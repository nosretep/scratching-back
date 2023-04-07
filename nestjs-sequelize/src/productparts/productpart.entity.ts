import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Part } from "src/parts/part.entity";
import { Product } from "src/products/product.entity";

@Table({tableName: 'product_parts'})
export class ProductPart extends Model {
  @ForeignKey(() => Product)
  @Column
  product_id: number;

  @ForeignKey(() => Part)
  @Column
  part_id: number;
}