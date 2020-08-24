import keysToCamel from '~/classes/keysToCamel';

export default class BookmarkClass {
  id: number | null = null;
  image: string | null = null;
  name: string | null = null;
  type: string | null = null;
  cost: number | null = null;
  selected: boolean| null = false;

  constructor (data:any) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
