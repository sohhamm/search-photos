import * as React from 'react';
import Masonry from 'react-masonry-css';
import { useRecentPhotos } from '../../data/use-recent-photos';
import { Image, Text } from '@chakra-ui/react';
import styles from './styles.module.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryLayout() {
  const { recentPhotos, error } = useRecentPhotos();
  console.log(recentPhotos);

  if (error) <Text>error loading...</Text>;
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.my_masonry_grid}
      columnClassName={styles.my_masonry_grid_column}
    >
      {recentPhotos?.photo.map((photo) => (
        <Image key={photo.id} src={photo.url_m} w="200px" />
      ))}
    </Masonry>
  );
}

//...
