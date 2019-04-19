import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./home'));

const LazyHome = props => (
  <Suspense fallback={<p>loading</p>}>
    <Home {...props} />
  </Suspense>
);

export default LazyHome;
