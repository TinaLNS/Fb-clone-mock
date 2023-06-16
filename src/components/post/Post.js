import React, { useState } from 'react';
import "./post.css";
import { MoreVert, ThumbUpOffAlt, Favorite } from "@mui/icons-material";
import { Users } from "../../sampleData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const imageFiles = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
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
          <div className="postImages">
            {imageFiles.map((imageFile) => (
              <img
                key={imageFile}
                className="postImg"
                src={`../assets/postImages/${imageFile}`}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {like ? (
              <ThumbUpOffAlt className="likeIcon" onClick={likeHandler} />
            ) : (
              <Favorite className="likeIcon" onClick={likeHandler} />
            )}
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;


