import React from 'react';
import './video-thumbnail.css';

export default function VideoThumbnail({
  video: {
    category,
    isBookmarked,
    isTrending,
    rating,
    thumbnail: {
      regular: { small, medium, large },
    },
    title,
    year,
  },
}) {
  const sImg = small.split('./assets')[1];
  const mImg = medium.split('./assets')[1];
  const lImg = large.split('./assets')[1];

  return (
    <div>
      <div className='video-thumbnail__img-container'>
        <div className='video-thumbnail__img-overlay'></div>
        <img
          alt={`Video thumbnail for ${title}, a ${category} made in ${year}`}
          srcSet={`${sImg} 320w, ${mImg} 440w, ${lImg} 560w`}
          className='video-thumbnail__img'
        />
      </div>
      <footer className='video-thumbnail__footer'>
        <p className='video-thumbnail__detail body-s'>{year}</p>
        <div className='video-thumbnail__circle'></div>
        <span>
          {category.toLowerCase() === 'movie' ? (
            <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z'
                fill='#fff'
              />
            </svg>
          ) : (
            <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z'
                fill='#fff'
              />
            </svg>
          )}
          <p className='video-thumbnail__detail body-s'>{category}</p>
        </span>
        <div className='video-thumbnail__circle'></div>
        <p className='video-thumbnail__detail body-s'>{rating}</p>
      </footer>
      <h3 className='video-thumbnail__title'>{title}</h3>
    </div>
  );
}
