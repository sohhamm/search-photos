import { Box } from '@chakra-ui/react';
import * as React from 'react';
import './App.css';
import Header from './components/Header';
import MasonryLayout from './components/Masonry/Masonry';
import { useRecentPhotos } from './data/use-recent-photos';

export default function App() {
  return (
    <Box>
      <Header />
      <MasonryLayout />
    </Box>
  );
}
