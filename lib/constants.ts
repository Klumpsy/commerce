export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Meest verkocht',
  slug: null,
  sortKey: 'BEST_SELLING',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Nieuw', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Prijs: laag > hoog', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Prijs: hoog > laag', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
