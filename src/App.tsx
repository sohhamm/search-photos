import { Box } from '@chakra-ui/react';
import * as React from 'react';
import './App.css';
import Header from './components/Header';
import { useRecentPhotos } from './data/use-recent-photos';

export default function App() {
  const { recentPhotos, error } = useRecentPhotos();
  console.log(recentPhotos);

  return (
    <Box>
      <Header />
    </Box>
  );
}
