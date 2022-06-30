import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Movies from './pages/Home/Home.js';
import TVSeries from './pages/Home/Home.js';
import Bookmarks from './pages/Home/Home.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Searchbar from './components/Searchbar/Searchbar.js';

import SearchedFor from './components/SearchedFor/SearchedFor.js';
import './pageLayout.css';
import './base.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('data.json');
      const videosFetched = await response.json();

      setVideos(videosFetched);
    };

    fetchVideos();
  }, []);

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
            <Route exact path='/' element={searchResults ? <SearchedFor /> : <Home />} />
            <Route exact path='/movies' element={<Movies />} />
            <Route exact path='/tv-series' element={<TVSeries />} />
            <Route exact path='/bookmarks' element={<Bookmarks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
