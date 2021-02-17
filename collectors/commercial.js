import collectorWithUserAuth from "@/collectors/base_auth";

const resource = '/commercial';

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
  async prices(){
    const url = `${resource}/products`;
    return  await this.getCollector()
      .get(url);
  },
  async initPay(data){
    const url = `${resource}/payment`;
    return  await this.getCollector().post(url, data);
  }
};
