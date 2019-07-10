export type sortDir = '1' | '-1';
export type sortBy = 'title' | 'year' | 'metascore';

export interface Sort {
  byWhat: sortBy;
  order: sortDir;
}
