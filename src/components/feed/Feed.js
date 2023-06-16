import React, { useState } from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { posts } from '../../sampleData';

const Feed = () => {
  const [postList, setPostList] = useState(posts);

  const addNewPost = (newPost) => {
    setPostList([newPost, ...postList]);
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share addNewPost={addNewPost} />
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

