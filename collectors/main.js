import collectorWithUserAuth from "@/collectors/base_auth";

const resource = '/';

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

  async subscribe (email) {
    const url = `${resource}subscribe`;
    return  await this.getCollector()
      .post(url, { email });
  },

  async faqs() {
    const url = `${resource}faqs`;
    return  await this.getCollector()
      .get(url);
  },
  async tutorials(page_size = 10) {
    const url = `${resource}tutorials`;
    return  await this.getCollector()
      .get(url+'?page_size='+page_size);
  },

  async software() {
    const url = `${resource}software`;
    return  await this.getCollector()
      .get(url);
  },
  async page(slug) {
    const url = `${resource}pages/${slug}`;
    return  await this.getCollector()
      .get(url);
  }
};
