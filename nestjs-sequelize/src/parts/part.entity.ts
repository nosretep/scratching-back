import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';
import { ProductPart } from 'src/productparts/productpart.entity'

@Table({tableName: 'parts'})
export class Part extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column
  description: string;

  @BelongsToMany(() => Product, () => ProductPart)
  products: Product[];
}