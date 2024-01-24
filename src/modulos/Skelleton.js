import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonWithImage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
      <Skeleton circle={true} height={100} width={100} style={{ marginRight: '10px' }} />
      <div>
        <Skeleton height={20} width={150} style={{ marginBottom: '10px' }} />
        <Skeleton height={20} width={100} />
      </div>
    </div>
  );
};

export default SkeletonWithImage;