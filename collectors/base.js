import axios from 'axios';

const baseDomain = process.env.baseUrl;
const baseURL = `${baseDomain}api/`;
console.log("base url is");
console.log('Base url is ' + baseURL);

const baseCollector = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json'
  }
});

baseCollector.interceptors.response.use((response) => {
  return Promise.resolve(response);
}, error => {
  if(error.response && error.response.status >= 500){
    $nuxt.$emit('server-error', error);
  }
  return Promise.reject(error);
});

export default baseCollector;
