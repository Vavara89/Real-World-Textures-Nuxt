import collectorWithUserAuth from "@/collectors/base_auth";

const resource = 'catalog';

export default {
  async filter (type){
    console.log(this.$route);
    return await collectorWithUserAuth
      .get(`${resource}/${type}/filter`);
  }
};
