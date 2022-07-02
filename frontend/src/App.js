import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Movies from './pages/Home/Home.js';
import TVSeries from './pages/Home/Home.js';
import Bookmarks from './pages/Home/Home.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Searchbar from './components/Searchbar/Searchbar.js';

import VideoGroup from './components/VideoGroup/VideoGroup.js';
import './Page-layout.css';
import './Base.css';

function App() {
  const [videos, setVideos] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState();

  // Fetch data from API (or local json in this case)
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('data.json');
      const videosFetched = await response.json();

      setVideos(videosFetched);
    };

    fetchVideos();
  }, []);

  // Filters search results
  const querySearchTerm = (e) => {
    setSearchQuery(e.target.value);

    if (!e.target.value.length) {
      return setSearchResults('');
    }

    setSearchResults(
      videos.filter((video) => {
        return video.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  };

  return (
    <Router>
      <div className='page'>
        <Sidebar />
        <main>
          <Searchbar searchQuery={searchQuery} querySearchTerm={querySearchTerm} />
          <Routes>
            <Route
              exact
              path='/'
              element={
                searchResults ? (
                  <VideoGroup
                    title={`Found ${searchResults.length} ${
                      searchResults.length === 1 ? 'result' : 'results'
                    } for '${searchQuery}'`}
                    videos={searchResults}
                  />
                ) : (
                  <Home title='Recommended for you' videos={videos} />
                )
              }
            />
            <Route exact path='/movies' element={searchResults ? <VideoGroup /> : <Movies />} />
            <Route
              exact
              path='/tv-series'
              element={searchResults ? <VideoGroup /> : <TVSeries />}
            />
            <Route
              exact
              path='/bookmarks'
              element={searchResults ? <VideoGroup /> : <Bookmarks />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
