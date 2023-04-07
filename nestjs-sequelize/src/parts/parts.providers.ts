import { Part } from './part.entity';

export const partsProviders = [
  {
    provide: 'PARTS_REPOSITORY',
    useValue: Part,
  },
];