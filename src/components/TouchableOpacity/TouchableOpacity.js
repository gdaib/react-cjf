import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { is, fromJS } from 'immutable';
import './TouchableOpacity.scss';


export default class TouchableOpacity extends Component {
  static propTypes = {
    clickCallback: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string,
  }

  handleTouchStart = () => {
    this.refs.btn.style.opacity = 0.3;
  }

  handleTouchEnd = () => {
    this.refs.btn.style.opacity = 1;
    this.props.clickCallback && this.props.clickCallback();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render() {
    const { text, className } = this.props;
    return (
      <div className={`btn-con ${className}`}
        ref="btn"
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}>
        {text || '确认'}
      </div>
    )
  }
}