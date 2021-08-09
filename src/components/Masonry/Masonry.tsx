import React from 'react';
import Masonry from 'react-masonry-css';

export default function MasonryLayout({ children }) {
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </div>
  );
}

//...
