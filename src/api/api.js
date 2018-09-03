import Server from "./server";

class API extends Server {
  /**
   * 用途: 获取佣金数据
   * @url https://www.easy-mock.com/mock/5b8cd67c76d0775c5c87319e/shopro/data/balance
   */
  async getBalance(parmas = {}) {
    try {
      let res = await this.axios('get' ,"/data/balance", parmas);
      if (res && res.data instanceof Object && res.code === 0) {
        return res.data || {};
      } else {
        let err = {
          tip: "获取佣金数据失败",
          response: res,
          data: parmas,
          url:
            "https://www.easy-mock.com/mock/5b8cd67c76d0775c5c87319e/shopro/data/balance"
        };
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default new API();
