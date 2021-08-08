import * as React from 'react';
import './App.css';
import { useRecentPhotos } from './data/use-recent-photos';

export default function App() {
  const { recentPhotos, error } = useRecentPhotos();
  console.log(recentPhotos);

  return <div>search photos</div>;
}
