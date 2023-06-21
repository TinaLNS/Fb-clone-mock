import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import { posts } from '../../sampleData';
import './home.css';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="homeCenter">
          <Feed posts={posts} />
        </div>
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
