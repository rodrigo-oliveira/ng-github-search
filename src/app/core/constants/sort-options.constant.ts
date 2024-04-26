import { SortOption } from '../models/sort-option.interface';

export const SORT_OPTION_UPDATED = 'updated';
export const SORT_OPTION_FULL_NAME = 'full_name';
export const SORT_OPTION_STARS = 'stars';
export const SORT_OPTIONS: SortOption[] = [
    {
      name: 'Last updated',
      value: SORT_OPTION_UPDATED
    },
    {
      name: 'Name',
      value: SORT_OPTION_FULL_NAME
    },
    {
      name: 'Stars',
      value: SORT_OPTION_STARS
    }
];