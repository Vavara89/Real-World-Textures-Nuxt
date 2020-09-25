import collectorWithUserAuth from "~/collectors/base_auth";
import baseCollector from "~/collectors/base";
import ProfileClass from "~/classes/profile.class.ts";

const resource = 'users/';

export default {
  async register (data){
    return await collectorWithUserAuth
      .post(`${resource}register`, data);
  },
  async login (data){
    return await collectorWithUserAuth
      .post(`${resource}login/`, data);
  },
  async facebook (token){
    return await baseCollector
      .post(`${resource}facebook?token=${token}`, {});
  },
  async google (token){
    return await baseCollector
      .post(`${resource}google?token=${token}`, {});
  },
  async recovery (email){
    return await baseCollector
      .post(`${resource}password_reset/`, { email });
  },
  async recoveryFinish (token, password){
    return await baseCollector
      .post(`${resource}password_reset/confirm/`, { token, password });
  },
  async getProfile (userId){
    const profile = collectorWithUserAuth
      .get(`${resource}profile/${userId}`);
    return profile.data;
  },
  async getMyProfile (){
    const profile = collectorWithUserAuth
      .get(`${resource}profile/`);
    return new ProfileClass(profile.data);
  },
  async saveProfile (data){
    const profile = collectorWithUserAuth
      .post(`${resource}profile/update`, data);
    return new ProfileClass(profile.data);
  },
  async saveAddress(data){
    return collectorWithUserAuth
      .post(`${resource}profile/address`, data);
  },
  async savePayment(data){
    return collectorWithUserAuth
      .post(`${resource}profile/payment`, data);
  },
  async updatePayment(data){
    return collectorWithUserAuth
      .patch(`${resource}profile/payment/update`, data);
  },
  async deletePayment(){
    return collectorWithUserAuth
      .delete(`${resource}profile/payment/delete`);
  },
  async changePassword (data){
    return  await collectorWithUserAuth
      .post(`${resource}change_password`, data);
  },

  async subscribe(price_id){
    return await collectorWithUserAuth.post(`${resource}profile/subscription`, {
      'price_id':price_id
    });
  },
};
