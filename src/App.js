import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
