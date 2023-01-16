export interface IProduct {
  code: string;
  name: string;
  sales: number;
  price: number;
  stock: number;
}

export interface IProductsResponse {
  page: number;
  perPage: number;
  previousPage: string;
  nextPage: string;
  lastPage: number;
  count: number;
  content: IProduct[];
}

export interface IProductQuery {
  data?: IProductsResponse;
  isLoading: boolean;
  error: boolean | null;
}
