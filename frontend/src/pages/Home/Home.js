import React from 'react';
import TrendingThumbnail from '../../components/TrendingThumbnail/TrendingThumbnail.js';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';
import './Home.css';

export default function Home({ title, videos }) {
  return (
    <div>
      <div className='trending'>
        <h2 className='trending__title'>Trending</h2>
        <div className='trending__row'>
          {videos
            .filter((video) => video.isTrending)
            .map((trendingVideo, index) => (
              <TrendingThumbnail video={trendingVideo} key={index} />
            ))}
        </div>
      </div>
      <VideoGroup title={title} videos={videos.filter((video) => !video.isTrending)} />
    </div>
  );
}
