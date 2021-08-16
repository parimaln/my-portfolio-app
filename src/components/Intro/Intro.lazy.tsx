import React, { lazy, Suspense } from 'react';

const LazyIntro = lazy(() => import('./Intro'));

const Intro = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyIntro {...props} />
  </Suspense>
);

export default Intro;
