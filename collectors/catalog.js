import collectorWithUserAuth from "~/collectors/base_auth";
import baseCollector from "@/collectors/base";

const resource = 'users/';

export default {
  async categories (type){
    return await baseCollector()
      .post(`${resource}catalog/categories/${type}`);
  }
};
