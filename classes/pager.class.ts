import keysToCamel from '~/classes/keysToCamel';

export default class PagerClass {
  id: number | null = null;
  count: number | null = null;
  previous: string | null = null;
  next: string | null = null;
  current: number | null = null;
  pages_count: number | null = null;
  page_size: number | null = null;
  page_size_query_param: string | null = null;
  page_query_param: string | null = null;

  constructor (data: any) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
