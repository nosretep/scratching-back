import { Table, Column, Model, Index, HasMany } from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';

@Table({ tableName: 'users' })
export class User extends Model {
    @Index
    @Column
    sub: string;

    @Column
    preferred_username: string;

    @Column
    name: string;

    @Column
    given_name: string;

    @Column
    family_name: string;

    @Column
    email: string;

    @Column
    email_verified: boolean;

    @HasMany(() => Product)
    products: Product[];

}