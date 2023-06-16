import React from 'react';
import './rightbar.css';
import { Users } from '../../sampleData';

const Rightbar = ({ isProfile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Online friends</h4>
        <div className="rightbarFriendList">
          <div className="rightbarFollowings">
            {Users.map((user) => (
              <div className="rightbarFollowing" key={user.id}>
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{user.username}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Birthdays section */}
        <br></br>
        <hr></hr>
        <div className="birthdayList">
          <h4 className="rightbarTitle">Birthdays</h4>
          {Users.map((user) => (
            <div className="birthdayItem" key={user.id}>
              <div className="birthdayItemImgContainer">
                <img
                  className="birthdayItemImg"
                  src={user.profilePicture}
                  alt={user.username}
                />
              </div>
              <span className="birthdayItemName">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {/* User information section */}
        {isProfile && (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City: </span>
                <span className="rightbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From: </span>
                <span className="rightbarInfoValue">San Diego, CA</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship: </span>
                <span className="rightbarInfoValue">It's complicated with Ross</span>
              </div>
            </div>
            <br></br>
            <hr></hr>
          </>
        )}
        {/* User friends section */}
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFriendList">
          <div className="rightbarFollowings">
            {Users.map((user) => (
              <div className="rightbarFollowing" key={user.id}>
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{user.username}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      {/* Display ProfileRightbar or HomeRightbar based on the context */}
      {isProfile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
};

export default Rightbar;
