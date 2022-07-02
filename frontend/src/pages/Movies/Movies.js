import React, { useEffect } from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';

export default function Movies({ title, videos, setSearchPlaceholder }) {
  useEffect(() => {
    setSearchPlaceholder('Search for movies');
  }, []);

  return (
    <VideoGroup
      title={title}
      videos={videos.filter((video) => video.category.toLowerCase() === 'movie')}
    />
  );
}
