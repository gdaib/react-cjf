import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import FastClick from 'fastclick';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';

import './utils/setRem';
import '@/style/base.scss'
import "@/assets/iconfonts/iconfont.css";

FastClick.attach(document.body);

const render = Compoment => {
  ReactDOM.render(
    <AppContainer>
      <Compoment />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Route)

if (module.hot) {
  // './router/',
  module.hot.accept(() => {
    render(Route)
  })
}

registerServiceWorker();
