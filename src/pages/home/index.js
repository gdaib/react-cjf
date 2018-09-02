import React, { Component } from 'react';
import PublicHeader from '@/components/header';

class Home extends Component {
  render() {
    return (
      <main className="home-containe">
        <PublicHeader title="首页" record/>
      </main>
    )
  }

}


export default Home;