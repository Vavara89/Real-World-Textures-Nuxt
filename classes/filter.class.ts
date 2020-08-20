import keysToCamel from '~/classes/keysToCamel';
import CategoryClass from '~/classes/category.class';
import BrandClass from '~/classes/brand.class';

export default class FilterClass {
  categories: Array<CategoryClass> | null = [];
  brands: Array<BrandClass> | null = [];
  colors: Array<String> | null = [];
  areas: Array<Array<String>> | null = [];
  counts: {} = {
    "textures": null,
    "brands": null,
    "models": null,
    "hdr": null
  };
  constructor (data = null) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
