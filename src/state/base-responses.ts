export interface Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}

export interface Pageable {
  paged: boolean;
  unpaged: boolean;
  pageSize: number;
  pageNumber: number;
  sort: Sort;
  offset: number;
}

export interface ListResponse<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  numberOfElements: number;
  sort: Sort;
  size: number;
  number: number;
  empty: boolean;
}
