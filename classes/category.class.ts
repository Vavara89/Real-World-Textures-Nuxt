import keysToCamel from './keysToCamel';

export default class CategoryClass {
  id: number | null = null;
  name: string | null = null;
  child: [CategoryClass] | null = null;

  constructor (data = null) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }
}
