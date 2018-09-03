import React, { Component } from "react";
import { fromJS, is } from "immutable";
import PublicHeader from "@/components/header";
import PublicAlert from "@/components/alert/alert";

import TouchableOpacity from "@/components/TouchableOpacity/TouchableOpacity";
import API from "@/api/api";
import "./balance.scss";

class Balance extends Component {
  state = {
    applyNum: "", // 输入值
    alertStatus: false, // 弹框状态
    alertTip: "", // 弹框提示文字
    balance: {
      // 可提现金额
      balance: 0
    }
  };
  // 初始化数据
  initData = async () => {
    try {
      let result = await API.getBalance();
      console.log(result);
      this.setState({ balance: result });
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * 格式化输入数据
   * 格式为微信红包格式： 最大200.00
   * @param {object} event 事件对象
   */
  handleInput = event => {
    let value = event.target.value;
    if (/^\d*?\.?\d{0,2}?$/gi.test(value)) {
      if (/^0+[1-9]+/.test(value)) {
        value = value.replace(/^0+/, "");
      }
      if (/^0{2}\./.test(value)) {
        value = value.replace(/^0+/, "0");
      }
      value = value.replace(/^\./gi, "0.");
      if (parseFloat(value) > 200) {
        value = "200.00";
      }
      this.setState({ applyNum: value });
    }
  };

  /**
   * 关闭弹框
   */
  closeAlert = () => {
    this.setState({
      alertStatus: false,
      alertTip: ""
    });
  };

  /**
   * 提交判断条件
   */
  submitForm = () => {
    let alertTip;
    if (!this.state.applyNum) {
      alertTip = '请输入提现金额';
    } else if (parseFloat(this.state.applyNum) > this.state.balance.balance) {
      alertTip = '申请提现金额不能大于余额';
    } else {
      alertTip = '申请提现成功';
    }

    this.setState({
      alertStatus: true,
      alertTip,
      applyNum: ''
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  componentDidMount() {
    this.initData();
  }

  render() {
    const { balance, applyNum, alertStatus, alertTip } = this.state;
    return (
      <main className="home-container">
        <PublicHeader title="提现" record />
        <section className="balance-main-content">
          <p className="balance-header">
            您的可提现金额为: ￥ {balance.balance}
          </p>
          <form className="balance-form">
            <p>请输入提现金额 (元) </p>
            <p>
              ￥
              <input
                type="text"
                value={applyNum}
                placeholder="0.00"
                onInput={this.handleInput}
                maxLength="5"
              />
            </p>
          </form>
          <TouchableOpacity className="submit-btn" text="申请提现" clickCallback={this.submitForm}/>
        </section>
        <PublicAlert
          closeAlert={this.closeAlert}
          alertTip={alertTip}
          alertStatus={alertStatus}
        />
      </main>
    );
  }
}

export default Balance;
