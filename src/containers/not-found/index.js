import React, { Suspense, lazy } from 'react';

const NotFound = lazy(() => import('./not-found'));

const LazyNotFound = props => (
  <Suspense fallback={<p>loading</p>}>
    <NotFound {...props} />
  </Suspense>
);

export default LazyNotFound;
