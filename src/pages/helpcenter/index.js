import React, { Component } from 'react';
import PublicHeader from '@/components/header';
import './helpcenter.scss';

class helpcenter extends Component {
  render() {
    return (
      <main>
        <PublicHeader title="帮助中心" record />
        <article className="context-con">
          <h2>介绍</h2>
          <p>本项目主要用于理解 react 和 redux 的工作方式，以及它们之间的配合方式</p>
          <h2>技术要点</h2>
          <p>react v16.4.2</p>
          <p>redux v4.0</p>
          <p>webpack v3.8</p>
          <p>react-router v4.3.1</p>
          <p>ES 6/7/8</p>
          <p>code split</p>
          <p>axios v0.17</p>
          <p>sass: v4.9.3</p>
          <p>immutable v3.8.2</p>
        </article>
      </main>
    );
  }
}

export default helpcenter;