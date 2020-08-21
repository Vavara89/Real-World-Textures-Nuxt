import collectorWithUserAuth from "@/collectors/base_auth";

const resource = 'catalog';

export default {
  async filter (type, qs){
    return await collectorWithUserAuth
      .get(`${resource}/${type}/filter?${qs}`, {search: 'example'});
  },
  async products (type, qs){
    return await collectorWithUserAuth
      .get(`${resource}/${type}?${qs}`);
  }
};
