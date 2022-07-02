import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Movies from './pages/Movies/Movies.js';
import TVSeries from './pages/TVSeries/TVSeries.js';
import Bookmarks from './pages/Bookmarks/Bookmarks.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Searchbar from './components/Searchbar/Searchbar.js';
import VideoGroup from './components/VideoGroup/VideoGroup.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import './PageLayout.css';
import './Base.css';

export const VideosContext = createContext();

function App() {
  const [videos, setVideos] = useLocalStorage('videos', []);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search for movies or TV series');

  // Fetch data from API (or local json in this case)
  useEffect(() => {
    const fetchVideos = async () => {
      if (videos.length < 1) {
        const response = await fetch('data.json');
        const videosFetched = await response.json();

        setVideos(videosFetched);
      } else {
        setVideos(videos);
      }
    };

    fetchVideos();
  }, []);

  // Filters search results
  const querySearchTerm = (e) => {
    setSearchQuery(e.target.value);

    if (!e.target.value.length) {
      return setSearchResults('');
    }

    console.log(
      videos.filter((video) => {
        return video.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );

    setSearchResults(
      videos.filter((video) => {
        return video.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  };

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      <Router>
        <div className='page'>
          <Sidebar />
          <main className='main'>
            <Searchbar
              searchQuery={searchQuery}
              querySearchTerm={querySearchTerm}
              searchPlaceholder={searchPlaceholder}
            />
            <Routes>
              <Route
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
                    <Home
                      title='Recommended for you'
                      videos={videos}
                      setSearchPlaceholder={setSearchPlaceholder}
                    />
                  )
                }
              />
              <Route
                path='/movies'
                element={
                  searchResults ? (
                    <VideoGroup
                      title={`Found ${
                        searchResults.filter((video) => video.category.toLowerCase() === 'movie')
                          .length
                      } ${
                        searchResults.filter((video) => video.category.toLowerCase() === 'movie')
                          .length === 1
                          ? 'result'
                          : 'results'
                      } for '${searchQuery}'`}
                      videos={searchResults.filter(
                        (video) => video.category.toLowerCase() === 'movie'
                      )}
                    />
                  ) : (
                    <Movies
                      title='Movies'
                      videos={videos}
                      setSearchPlaceholder={setSearchPlaceholder}
                    />
                  )
                }
              />
              <Route
                path='/tv-series'
                element={
                  searchResults ? (
                    <VideoGroup
                      title={`Found ${
                        searchResults.filter(
                          (video) => video.category.toLowerCase() === 'tv series'
                        ).length
                      } ${
                        searchResults.filter(
                          (video) => video.category.toLowerCase() === 'tv series'
                        ).length === 1
                          ? 'result'
                          : 'results'
                      } for '${searchQuery}'`}
                      videos={searchResults.filter(
                        (video) => video.category.toLowerCase() === 'tv series'
                      )}
                    />
                  ) : (
                    <TVSeries
                      title='TV Series'
                      videos={videos}
                      setSearchPlaceholder={setSearchPlaceholder}
                    />
                  )
                }
              />
              <Route
                path='/bookmarks'
                element={
                  searchResults ? (
                    <VideoGroup
                      title={`Found ${searchResults.filter((video) => video.isBookmarked).length} ${
                        searchResults.filter((video) => video.isBookmarked).length === 1
                          ? 'result'
                          : 'results'
                      } for '${searchQuery}'`}
                      videos={searchResults.filter((video) => video.isBookmarked)}
                    />
                  ) : (
                    <Bookmarks videos={videos} setSearchPlaceholder={setSearchPlaceholder} />
                  )
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </VideosContext.Provider>
  );
}

export default App;
