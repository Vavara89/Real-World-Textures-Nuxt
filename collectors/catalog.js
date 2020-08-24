import collectorWithUserAuth from "@/collectors/base_auth";
import {USER_AUTH_KEY_STORAGE} from "@/utils";

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
};
