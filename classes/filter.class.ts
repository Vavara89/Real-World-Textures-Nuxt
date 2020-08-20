import CategoryClass from '~/classes/category.class';
import BrandClass from '~/classes/brand.class';

interface Category{
  id: number;
  name: string;
  slug: string;
  child: Array<Category>;
  absolute_url: string;
}

interface Brand{
  id: number;
  name: string;
  slug: string;
}

interface Filter{
  categories: Array<Category>,
  brands: Array<Brand>,
  colors: Array<String>,
  counts: {},
  areas: Array<any>
}
export default class FilterClass {
  categories: Array<CategoryClass> | [] = [];
  brands: Array<BrandClass> | null = [];
  colors: Array<String> | null = [];
  areas: Array<any> | null = [];
  counts: {} = {
    "textures": null,
    "brands": null,
    "models": null,
    "hdr": null
  };
  constructor (data: Filter) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
