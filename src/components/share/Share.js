import React, { useState } from 'react';
import './share.css';
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  ThumbUpRounded,
  ThumbDownRounded,
  SentimentVerySatisfiedRounded,
  SentimentDissatisfiedRounded,
  SentimentVeryDissatisfiedRounded,
} from '@mui/icons-material';

function Share({ addNewPost }) {
  const [postText, setPostText] = useState('');
  const [showFeelingsOptions, setShowFeelingsOptions] = useState(false);
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [isThumbsUp, setIsThumbsUp] = useState(false);
  const [thumbsDownCount, setThumbsDownCount] = useState(0);
  const [isThumbsDown, setIsThumbsDown] = useState(false);
  const [laughCount, setLaughCount] = useState(0);
  const [isLaugh, setIsLaugh] = useState(false);
  const [sadCount, setSadCount] = useState(0);
  const [isSad, setIsSad] = useState(false);
  const [angryCount, setAngryCount] = useState(0);
  const [isAngry, setIsAngry] = useState(false);

  const toggleFeelingsOptions = () => {
    setShowFeelingsOptions((prevShow) => !prevShow);
  };

  const handleShare = () => {
    const newPost = {
      id: Math.random(),
      userId: 5,
      desc: postText,
      date: new Date().toDateString(),
      thumbsUpCount,
      thumbsDownCount,
      laughCount,
      sadCount,
      angryCount,
    };

    addNewPost(newPost);

    setPostText('');
  };

  const thumbsUpHandler = () => {
    setThumbsUpCount((prevCount) => prevCount + 1);
    setIsThumbsUp(true);
  };

  const thumbsDownHandler = () => {
    setThumbsDownCount((prevCount) => prevCount + 1);
    setIsThumbsDown(true);
  };

  const laughHandler = () => {
    setLaughCount((prevCount) => prevCount + 1);
    setIsLaugh(true);
  };

  const sadHandler = () => {
    setSadCount((prevCount) => prevCount + 1);
    setIsSad(true);
  };

  const angryHandler = () => {
    setAngryCount((prevCount) => prevCount + 1);
    setIsAngry(true);
  };

  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src="assets/person/01.jpg" alt="" />
            <input
              placeholder="What's on your mind, Rachel?"
              className="shareInput"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo/video</span>
              </div>
            </div>
            <div className="shareOptions">
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
            </div>
            <div className="shareOptions">
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Check in</span>
              </div>
            </div>
            <div className="shareOptions">
            <div className="shareOption" onMouseEnter={() => toggleFeelingsOptions()} onMouseLeave={() => toggleFeelingsOptions()}>

                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feeling/activity</span>
                {showFeelingsOptions && (
                  <div className="feelingsOptions">
                    <div className="optionItem">
                      {isThumbsUp ? (
                        <ThumbUpRounded className="likeIcon" onClick={thumbsUpHandler} />
                      ) : (
                        <ThumbUpRounded htmlColor="royalblue" className="favoriteIcon" onClick={thumbsUpHandler} />
                      )}
                      <span className="postLikeCounter">{thumbsUpCount} people like it</span>
                    </div>
                    <div className="optionItem">
                      {isThumbsDown ? (
                        <ThumbDownRounded htmlColor="royalblue" className="likeIcon" onClick={thumbsDownHandler} />
                      ) : (
                        <ThumbDownRounded htmlColor="gray" className="favoriteIcon" onClick={thumbsDownHandler} />
                      )}
                      <span className="postLikeCounter">{thumbsDownCount} thumbs down</span>
                    </div>
                    <div className="optionItem">
                      {isLaugh ? (
                        <SentimentVerySatisfiedRounded
                          htmlColor="Orange"
                          className="likeIcon"
                          onClick={laughHandler}
                        />
                      ) : (
                        <SentimentVerySatisfiedRounded
                          htmlColor="orange"
                          className="favoriteIcon"
                          onClick={laughHandler}
                        />
                      )}
                      <span className="postLikeCounter">{laughCount} laughs</span>
                    </div>
                    <div className="optionItem">
                      {isSad ? (
                        <SentimentDissatisfiedRounded
                          htmlColor="mustard"
                          className="likeIcon"
                          onClick={sadHandler}
                        />
                      ) : (
                        <SentimentDissatisfiedRounded
                          htmlColor="purple"
                          className="favoriteIcon"
                          onClick={sadHandler}
                        />
                      )}
                      <span className="postLikeCounter">{sadCount} sad</span>
                    </div>
                    <div className="optionItem">
                      {isAngry ? (
                        <SentimentVeryDissatisfiedRounded
                          className="likeIcon"
                          htmlColor="red"
                          onClick={angryHandler}
                        />
                      ) : (
                        <SentimentVeryDissatisfiedRounded
                          className="favoriteIcon"
                          htmlColor="red"
                          onClick={angryHandler}
                        />
                      )}
                      <span className="postLikeCounter">{angryCount} angry</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button className="shareButton" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;

