import React, { useEffect } from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';

export default function TVSeries({ title, videos, setSearchPlaceholder }) {
  useEffect(() => {
    setSearchPlaceholder('Search for TV series');
  }, []);

  return (
    <VideoGroup
      title={title}
      videos={videos.filter((video) => video.category.toLowerCase() === 'tv series')}
    />
  );
}
