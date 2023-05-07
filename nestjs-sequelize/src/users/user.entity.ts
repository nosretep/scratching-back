import { Table, Column, Model, Index, HasMany } from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';

@Table({ tableName: 'users' })
export class User extends Model {
    @Column({ allowNull: false })
    sub: string;

    @Index
    @Column({ allowNull: false })
    preferred_username: string;

    @Index
    @Column({ allowNull: false })
    name: string;

    @Column({ allowNull: false })
    given_name: string;

    @Column({ allowNull: false })
    family_name: string;

    @Column({ allowNull: false })
    email: string;

    @Column({ allowNull: false })
    email_verified: boolean;

    @HasMany(() => Product)
    products: Product[];

}