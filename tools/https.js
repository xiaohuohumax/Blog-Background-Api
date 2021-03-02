const axios = require('axios');

// axios 封装
const http = params => {
  return new Promise((resolve, reject) => {
    axios(params).then(res => {
      if (res.status == 200) {
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err);
    })
  })
};

axios.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => response,
  error => {
    const code = error.response && error.response.status;
    const codeFunc = {
      500() { // 服务器抽风
      }
    }
    let resFunc = codeFunc[code];
    resFunc ? resFunc() : "";
    return Promise.reject(error)
  }
)

module.exports = http;