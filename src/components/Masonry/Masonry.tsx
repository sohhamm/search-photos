import * as React from 'react';
import Masonry from 'react-masonry-css';
import { useRecentPhotos } from '../../data/use-recent-photos';
import { Image, Text } from '@chakra-ui/react';

export default function MasonryLayout() {
  const { recentPhotos, error } = useRecentPhotos();
  console.log(recentPhotos);

  if (error) <Text>error loading...</Text>;
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {recentPhotos?.photo.map((photo) => (
        <Image key={photo.id} src={photo.url_m} w="200px" />
      ))}
    </Masonry>
  );
}

//...
