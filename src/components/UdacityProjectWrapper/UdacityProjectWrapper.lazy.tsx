import React, { lazy, Suspense } from 'react';

const LazyUdacityProjectWrapper = lazy(() => import('./UdacityProjectWrapper'));

const UdacityProjectWrapper = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUdacityProjectWrapper {...props} />
  </Suspense>
);

export default UdacityProjectWrapper;
