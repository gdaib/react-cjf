import React, { Component } from "react";
import PropTypes from "prop-types";
import { is, fromJS } from "immutable";
import TouchableOpacity from "@/components/TouchableOpacity/TouchableOpacity";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./alert.scss";

class Alert extends Component {
  static propTypes = {
    closeAlert: PropTypes.func.isRequired,
    alertTip: PropTypes.string.isRequired,
    alertStatus: PropTypes.bool.isRequired
  };

  // 关闭弹框
  confirm = () => {
    this.props.closeAlert();
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  render() {
    const { alertStatus, alertTip } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName="alert"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {alertStatus && (
          <div className="alert-con">
            <div className="alert-context">
              <div className="alert-context-detail ">{alertTip}</div>
              <TouchableOpacity
                className="confirm-btn"
                clickCallback={this.confirm}
              />
            </div>
          </div>
        )}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Alert;
