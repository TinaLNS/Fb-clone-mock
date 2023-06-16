import React from 'react';
import './sidebar.css';
import { Users } from "../../sampleData";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  Event,
  } from '@mui/icons-material';


  const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className='sidebarIcon' />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon' />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className='sidebarIcon' />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Group className='sidebarIcon' />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className='sidebarIcon' />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <Event className='sidebarIcon' />
              <span className="sidebarListItemText">Events</span>
            </li>
          </ul>
  
          <button className='sidebarButton'>Show More</button>
  
          <hr className='sidebarHr' />
  
          <h3 className="sidebarTitle">Friends</h3>
          <ul className="sidebarFriendList">
            {Users.map((user) => (
              <li className="sidebarFriendListItem" key={user.id}>
                <div className="sidebarFriendListImgContainer">
                  <img className="sidebarFriendListImg" src={user.profilePicture} alt={user.username} />
                </div>
                <span className="sidebarFriendListName">{user.username}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;