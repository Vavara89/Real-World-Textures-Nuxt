import collectorWithUserAuth from "@/collectors/base_auth";
import CategoryClass from "@/classes/category.class.ts";
import FilterClass from "@/classes/filter.class.ts";
import PagerClass from "@/classes/pager.class.ts";
import TexturesClass from "@/classes/textures.class.ts";
import ProductClass from "@/classes/product.class.ts";

const resource = 'catalog';

export default {
  token: null,
  setToken(token) {
    this.token = token;
  },
  getCollector(){
    const collector = {};
    const token = this.token;
    Object.assign(collector,collectorWithUserAuth);
    collector.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      }
    );
    return collector;
  },
  async filter (type, qs){
    return await this.getCollector()
      .get(`${resource}/${type}/filter?${qs}`, {search: 'example'});
  },
  async products (type, qs){
    return await this.getCollector()
      .get(`${resource}/${type}?${qs}`);
  },

  async category (type, slug, qs){
    return await this.getCollector()
      .get(`${resource}/${type}/category?slug=${slug}&${qs}`);
  },

  async product (type, slug){
    return await this.getCollector()
      .get(`${resource}/${type}/${slug}`);
  },

  async download(type, id, resolution){
    return await this.getCollector()
      .post(`${resource}/${type}/download/${id}-${resolution}`);
  },

  async loadCatalog(route, catalogType, context){
    let qs = Object.keys(route.query)
      .map(key => `${key}=${route.query[key]}`)
      .join('&');
    let activeCategory = {};
    let categoryPromise = null;
    let productPromise = null;
    let product = null;
    let categorySlug = route.params.sub ? route.params.slug + "/" + route.params.sub : route.params.slug;
    let productSlug = route.params.product ? route.params.product.replace('product-', '') : false;
    if(context && context.$auth.loggedIn){
      this.setToken(context.$auth.user.user.token);
    }

    if(route.params.sub && route.params.sub.startsWith('product-')){
      categorySlug = route.params.slug;
      productSlug = route.params.sub.replace('product-', '');
    }

    if (categorySlug) {
      categoryPromise = await this.category(catalogType, categorySlug, qs).then(response => {
        activeCategory = new CategoryClass(response.data);
        return activeCategory;
      });
      if (activeCategory) {
        qs += `&categories=${activeCategory.id}`;
      }
    }
    if(productSlug){
      productPromise = await this.product(catalogType, productSlug).then(response => {
        product = new ProductClass(response.data);
        return product;
      });
    }
    const filterPromise = await this.filter(catalogType, qs).then(response => {
      return new FilterClass(response.data);
    });
    const productsPromise = await this.products(catalogType, qs).then(response => {
      const textures = response.data.results.map(item => new ProductClass(item));
      return {textures: textures, pager: new PagerClass(response.data)}
    });
    return await Promise.all([filterPromise, productsPromise, categoryPromise, productPromise]);
  }
};
