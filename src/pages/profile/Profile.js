import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profilerightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src="assets/profileCover/Friends.jpg" alt="" />
              <img className='profileUserImg' src="assets/person/rachel.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Rachel Green</h4>
              <span className='profileInfoDesc'>“Isn’t that just kick-you-in-the-crotch, spit-on-your-neck fantastic.”</span>
            </div>
          </div>
          <div className="profilerightBottom">
            <Feed />
            <Rightbar isProfile={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
