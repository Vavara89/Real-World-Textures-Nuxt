import keysToCamel from '~/classes/keysToCamel';

export default class DistributorClass {
  id: number | null = null;
  name: string | null = null;
  address: string | null = null;
  website: string | null = null;

  constructor (data:any) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
