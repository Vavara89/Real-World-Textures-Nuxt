import keysToCamel from '~/classes/keysToCamel';

export default class CategoryClass {
  id: number | null = null;
  name: string | null = null;
  slug: string | null = null;
  child: Array<CategoryClass> | null = null;
  active: boolean  = false;

  constructor (data = null) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
