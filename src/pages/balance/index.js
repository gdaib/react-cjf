import React, { Component } from 'react';
import PublicHeader from '@/components/header';
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity';
import './balance.scss';

class Balance extends Component {
  state = {
    applyNum: '', // 输入值
    alertStatus: false, // 弹框状态
    alertTip: '', // 弹框提示文字
    balance: { // 可提现金额
      balance: 0
    }
  }

  // initData = async () => {
  //   try {
  //     let result = await API.getBalance();
  //     console.log(result);
  //     this.setState({balance: result});
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  render() {
    const { balance, applyNum } = this.state;
    return (
      <main className="home-container">
        <PublicHeader title="提现" record />
        <section className="balance-main-content">
          <p className="balance-header">
            您的可提现金额为: ￥ {balance.balance}
          </p>
          <form className="balance-form">
            <p>请输入提现金额 (元) </p>
            <p>￥<input type="text" value={applyNum} placeholder="0.00" onInput={this.handleInput} maxLength="5"/></p>
          </form>
          <TouchableOpacity className="submit-btn" text="申请提现"></TouchableOpacity>
        </section>
      </main>
    );
  }
}

export default Balance;