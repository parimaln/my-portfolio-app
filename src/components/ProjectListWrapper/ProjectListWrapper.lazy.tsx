import React, { lazy, Suspense } from 'react';

const LazyProjectListWrapper = lazy(() => import('./ProjectListWrapper'));

const ProjectListWrapper = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProjectListWrapper {...props} />
  </Suspense>
);

export default ProjectListWrapper;
