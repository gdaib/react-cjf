import axios from "axios";
import envconfig from "@/envconfig/envconfig";
/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址 例如 /login 配合baseURL组成完成请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***
 * @params timeout {number} 请求超时时间 默认 3000
 * @params headers {string} 指定请求头信息
 * @withCredentials {boolean} 请求是否携带本地cookie信息默认开启
 * @params vaildateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 *  * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
 */

export default class Server {
  axios(method, url, params) {
    return new Promise((resolve, reject) => {
      if (typeof params !== "object") params = {};
      let _option = params;
      _option = {
        method,
        url,
        baseURL: envconfig.baseURL,
        timeout: 30000,
        params: null,
        data: null,
        headers: null,
        withCredentials: true,
        vaildateStatus: status => {
          // 是否携带cookeis发起请求
          return status >= 200 && status < 300;
        },
        ...params
      };
      axios.request(_option).then(
        res => {
          resolve(
            typeof res.data === "object" ? res.data : JSON.parse(res.data)
          );
        },
        error => {
          if (error.response) {
            reject(error.response.data);
          } else {
            reject(error);
          }
        }
      );
    });
  }
  get = (url, params) => this.axios("get", url, params);
  post = (url, params) => this.axios("post", url, params);
  put = (url, params) => this.axios("put", url, params);
  delete = (url, params) => this.axios("delete", url, params);
}
