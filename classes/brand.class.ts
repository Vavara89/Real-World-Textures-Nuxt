import keysToCamel from '~/classes/keysToCamel';

export default class BrandClass {
  id: number | null = null;
  name: string | null = null;
  slug: string | null = null;

  constructor (data:any) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
