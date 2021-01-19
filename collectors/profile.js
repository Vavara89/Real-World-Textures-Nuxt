import collectorWithUserAuth from "@/collectors/base_auth";

const resource = 'users/profile/';

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

  async toggleBookMark(type, pk){
    return await this.getCollector()
      .post(`${resource}bookmarks/${type}/${pk}`);
  },
  async getBookmarks(){
    return await this.getCollector()
      .get(`${resource}bookmarks`);
  },
  async getInvoices(){
    return await this.getCollector()
      .get(`${resource}invoices`);
  }
};
