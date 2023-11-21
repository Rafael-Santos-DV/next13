import React from 'react';

import * as components from './styles';
import LoadingSkeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton = ({ skeletons }: { skeletons: number }) => {
  return (
    <components.Container>
      {Array.from({ length: skeletons }).map((key, index) => (
        <div key={`${key} + ${index}`}>
          <LoadingSkeleton count={1} className='skeleton-img' />
          <div>
            <LoadingSkeleton count={1} className='skeleton-name' />
            <LoadingSkeleton count={1} className='skeleton-price' />
          </div>
          <LoadingSkeleton count={1} className='skeleton-description' />
          <LoadingSkeleton count={1} className='skeleton-buy' />
        </div>
      ))}
    </components.Container>
  );
};
