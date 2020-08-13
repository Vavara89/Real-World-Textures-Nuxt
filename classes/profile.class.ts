import keysToCamel from './keysToCamel';

export default class ProfileClass {
  name: string | null = null;
  description: string | null = null;
  image: string | null = null;

  constructor (data = null) {
    if (data) {
      Object.assign(this, keysToCamel(data));
    }
  }

  getEnergy (): number {
    return 0;
  }

  getEcology (): number {
    return 0;
  }

  getPetrol (): number {
    return 0;
  }
}
