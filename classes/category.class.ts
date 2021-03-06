import keysToCamel from '~/classes/keysToCamel';

export default class CategoryClass {
  id: number | null = null;
  name: string | null = null;
  slug: string | null = null;
  child: Array<CategoryClass> | null = null;
  absolute_url: string | null = null;
  ancestors:  Array<CategoryClass> | null = null;

  constructor (data: any) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
