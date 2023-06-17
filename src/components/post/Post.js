import React, { useState } from 'react';
import './post.css';
import { MoreVert, Favorite } from '@mui/icons-material';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { Users, posts } from '../../sampleData';  



const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const submitComment = (e) => {
    e.preventDefault();
    const comment = {
      id: Math.random(),
      postId: post.id,
      userId: 1,
      text: newComment,
    };
    setComments([...comments, comment]);
    setNewComment('');
    setShowCommentForm(false);
    const updatedPost = {
      ...post,
      comments: post.comments ? post.comments + 1 : 1,
    };

    const updatedPosts = posts.map((p) => (p.id === post.id ? updatedPost : p));
  };

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
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
            {isLiked ? (
              <ThumbUpRoundedIcon className="likeIcon" onClick={likeHandler} />
            ) : (
              <>
                <Favorite className="favoriteIcon" onClick={likeHandler} />
                
              </>
            )}
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <ModeCommentRoundedIcon
                  className="commentIcon" 
                  onClick={toggleCommentForm} 
                />
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
      <div className="postWrapperBottom">
        {/* <span className="postCommentText" onClick={toggleCommentForm}>
          Add a comment...
        </span> */}
      </div>
    </div>
   );
  };
  
  export default Post;