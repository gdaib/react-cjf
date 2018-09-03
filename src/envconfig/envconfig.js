/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = "//elm.cangdu.org/img/";
if (process.env.NODE_ENV === "development") {
  baseURL = " https://www.easy-mock.com/mock/5b8cd67c76d0775c5c87319e/shopro";
} else {
}

export default { baseURL, imgUrl };
