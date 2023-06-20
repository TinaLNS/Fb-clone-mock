import React, { useState } from 'react';
import './post.css';
import { MoreVert, EmojiEmotions } from '@mui/icons-material';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@mui/icons-material/SentimentVeryDissatisfiedRounded';

import { Users, posts } from '../../sampleData';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [thumbsUpCount, setThumbsUpCount] = useState(post.thumbsUpCount || 0);
  const [thumbsDownCount, setThumbsDownCount] = useState(post.thumbsDownCount || 0);
  const [laughCount, setLaughCount] = useState(post.laughCount || 0);
  const [sadCount, setSadCount] = useState(post.sadCount || 0);
  const [angryCount, setAngryCount] = useState(post.angryCount || 0);
  const [isThumbsUp, setIsThumbsUp] = useState(false);
  const [isThumbsDown, setIsThumbsDown] = useState(false);
  const [isLaugh, setIsLaugh] = useState(false);
  const [isSad, setIsSad] = useState(false);
  const [isAngry, setIsAngry] = useState(false);
  const [showFeelingsOptions, setShowFeelingsOptions] = useState(false);

  const likeHandler = () => {
    setLike((prevLike) => (isLiked ? prevLike - 1 : prevLike + 1));
    setIsLiked((prevIsLiked) => !prevIsLiked);
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

  const toggleFeelingsOptions = () => {
    setShowFeelingsOptions((prevShowOptions) => !prevShowOptions);
  };
 
  const submitComment = (e) => {
    e.preventDefault();
    const comment = {
      id: Math.random(),
      postId: post.id,
      userId: 1,
      text: newComment,
    };
    setComments((prevComments) => [...prevComments, comment]);
    setNewComment('');
    setShowCommentForm(false);
    const updatedPost = {
      ...post,
      comments: post.comments ? post.comments + 1 : 1,
    };

    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
  };

  const toggleCommentForm = () => {
    setShowCommentForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>

          {post.photo && (
            <div className="postImages">
              <img className="postImg" src={post.photo} alt="" />
            </div>
          )}
        </div>
        <div className="postBottom">
        <div className="postBottomLeft">
        <div className="likeOptions">
          {showFeelingsOptions && (
            <div className="feelingsOptions">
                  <div className="optionItem">
                    {isThumbsUp ? (
                      <ThumbUpRoundedIcon className="likeIcon" onClick={thumbsUpHandler} />
                    ) : (
                      <ThumbUpRoundedIcon className="favoriteIcon" onClick={thumbsUpHandler} />
                    )}
                    <span
            className="postLikeCounter"
            onMouseEnter={() => setShowFeelingsOptions(true)}
            onMouseLeave={() => setShowFeelingsOptions(false)}
          >
            {like} people like it
          </span>
        </div>
                  <div className="optionItem">
                    {isThumbsDown ? (
                      <ThumbDownRoundedIcon className="likeIcon" onClick={thumbsDownHandler} />
                    ) : (
                      <ThumbDownRoundedIcon className="favoriteIcon" onClick={thumbsDownHandler} />
                    )}
                    <span className="postLikeCounter">{thumbsDownCount} thumbs down</span>
                  </div>
                  <div className="optionItem">
                    {isLaugh ? (
                      <SentimentVerySatisfiedRoundedIcon className="likeIcon" onClick={laughHandler} />
                    ) : (
                      <SentimentVerySatisfiedRoundedIcon className="favoriteIcon" onClick={laughHandler} />
                    )}
                    <span className="postLikeCounter">{laughCount} laughs</span>
                  </div>
                  <div className="optionItem">
                    {isSad ? (
                      <SentimentDissatisfiedRoundedIcon className="likeIcon" onClick={sadHandler} />
                    ) : (
                      <SentimentDissatisfiedRoundedIcon className="favoriteIcon" onClick={sadHandler} />
                    )}
                    <span className="postLikeCounter">{sadCount} sad</span>
                  </div>
                  <div className="optionItem">
                    {isAngry ? (
                      <SentimentVeryDissatisfiedRoundedIcon className="likeIcon" onClick={angryHandler} />
                    ) : (
                      <SentimentVeryDissatisfiedRoundedIcon className="favoriteIcon" onClick={angryHandler} />
                    )}
                    <span className="postLikeCounter">{angryCount} angry</span>
                  </div>
                </div>
              )}
              {isLiked ? (
                <ThumbUpRoundedIcon className="likeIcon" onClick={likeHandler} />
              ) : (
                <ThumbUpRoundedIcon className="favoriteIcon" onClick={likeHandler} />
              )}
              <span
  className="postLikeCounter"
  onMouseEnter={toggleFeelingsOptions}
  onMouseLeave={toggleFeelingsOptions}
>
  {like} people like it
</span>

            </div>
            
          </div>
          <div className="postBottomRight">
            <ModeCommentRoundedIcon className="commentIcon" onClick={toggleCommentForm} />
            <span className="postCommenttext" onClick={toggleCommentForm}>
              {post.comments ? post.comments.length : 0} comments
            </span>
          </div>
        </div>
      </div>
      <div className="postComments">
        {comments.map((comment) => (
          <div key={comment.id} className="postComment">
            <span className="postCommentText">{comment.text}</span>
          </div>
        ))}
      </div>
      {showCommentForm && (
        <form onSubmit={submitComment} className="postCommentForm">
          <input
            type="text"
            className="postCommentInput"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit" className="postCommentButton">
            Comment
          </button>
        </form>
      )}
      <div className="postWrapperBottom"></div>
    </div>
  );
};

export default Post;