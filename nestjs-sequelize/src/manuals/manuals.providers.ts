import { Manual } from "./manual.entity";

export const manualsProviders = [
  {
    provide: 'MANUALS_REPOSITORY',
    useValue: Manual,
  },
];