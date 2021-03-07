import axios from "axios";


export default ({
  url = "",
  method = "get",
  params = {},
  data = {}
} = {}) => {
  // config defaults for instance
  const instance = axios.create({
    validateStatus: status => status >= 200 && status < 600
  });

  // interceptors
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // return instance
  return instance({ method, url, params, data });
};
