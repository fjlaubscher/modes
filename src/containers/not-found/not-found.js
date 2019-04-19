import React from 'react';
import { Helmet } from 'react-helmet';

// svgs
import NotFoundSVG from 'assets/404.svg';

const NotFound = () => (
  <div>
    <Helmet title='Modes - 404 Not Found!' />
    <img src={NotFoundSVG} />
  </div>
);

export default NotFound;
