import { Table, Column, Model, BelongsTo, ForeignKey, HasOne, BelongsToMany, Index } from 'sequelize-typescript';
import { Manual } from 'src/manuals/manual.entity';
import { Part } from 'src/parts/part.entity';
import { ProductPart } from 'src/productparts/productpart.entity';
import { User } from 'src/users/user.entity';

@Table({ tableName: 'products' })
export class Product extends Model {
  @Index
  @Column({ allowNull: false })
  name: string;

  @Column
  description: string;

  @HasOne(() => Manual, { foreignKey: 'product_id' })
  manual: Manual;

  @BelongsToMany(() => Part, () => ProductPart)
  parts: Part[];

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}