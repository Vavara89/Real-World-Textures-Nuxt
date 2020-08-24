import collectorWithUserAuth from "@/collectors/base_auth";

const resource = 'users/profile/';

export default {
  async toggleBookMark(type, pk){
    return await collectorWithUserAuth
      .post(`${resource}bookmarks/${type}/${pk}`);
  }
};
