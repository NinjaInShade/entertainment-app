import React from 'react';
import VideoGroup from '../../components/VideoGroup/VideoGroup.js';
import './home.css';

export default function Home({ title, videos }) {
  return (
    <div>
      <VideoGroup title={title} videos={videos} />
    </div>
  );
}
