import React, { useState } from 'react';
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

function Share({ addNewPost }) {
  const [postText, setPostText] = useState('');

  const handleShare = () => {
    const newPost = {
      id: Math.random(),
      userId: 1, 
      desc: postText,
      date: new Date().toDateString(),
      like: 0,
      comment: 0
    };

    addNewPost(newPost);

    setPostText('');
  };

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src="assets/person/01.jpg" alt="" />
          <input
            placeholder="What's on your mind, Rachel?"
            className='shareInput'
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <hr className='shareHr' />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or video</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton' onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;


