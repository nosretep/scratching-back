import { ProductPart } from './productpart.entity';

export const productPartsProviders = [
    {
        provide: 'PRODUCT_PARTS_REPOSITORY',
        useValue: ProductPart,
    },
];