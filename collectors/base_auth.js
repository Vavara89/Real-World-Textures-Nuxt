import baseCollector from "~/collectors/base";
import {getUuid, USER_AUTH_KEY_STORAGE} from "~/utils";


const collectorWithUserAuth = {};

Object.assign(collectorWithUserAuth, baseCollector,{
  headers: {
    Accept: 'application/json',
    Uuid: process.browser ? getUuid() : ''
  }
});

collectorWithUserAuth.interceptors.request.use(
  (config) => {
    let token = null;
    if (process.browser) {
      token = localStorage.getItem(USER_AUTH_KEY_STORAGE);
    }
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  }
)

export default collectorWithUserAuth;
