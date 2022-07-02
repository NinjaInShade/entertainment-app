import React, { useEffect } from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';

export default function Bookmarks({ videos, setSearchPlaceholder }) {
  useEffect(() => {
    setSearchPlaceholder('Search for bookmarked shows');
  }, []);

  return (
    <>
      <VideoGroup
        title='Bookmarked Movies'
        videos={videos.filter(
          (video) => video.category.toLowerCase() === 'movie' && video.isBookmarked
        )}
        className='video-group__bookmarks'
      />
      <VideoGroup
        title='Bookmarked TV Series'
        videos={videos.filter(
          (video) => video.category.toLowerCase() === 'tv series' && video.isBookmarked
        )}
      />
    </>
  );
}
