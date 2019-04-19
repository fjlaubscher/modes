import React from 'react';
import { hydrate, render } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import App from 'containers/app';
import { register, unregister } from './sw';

const supportsHistory = 'pushState' in window.history;
const rootElement = document.getElementById('root');
const renderApp = TheApp => {
  const CarbonApp = (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <TheApp />
    </BrowserRouter>
  );

  // hydrate the client if dom is already rendered with react-snap
  // only hydrates if you run the build script and host the static files somewhere
  return (
    (rootElement.hasChildNodes() && hydrate(CarbonApp, rootElement)) ||
    render(CarbonApp, rootElement)
  );
};

if (module.hot)
  module.hot.accept(() => {
    const NewApp = require('./containers/app').default;
    renderApp(NewApp);
  });

renderApp(App);

if (process.env.NODE_ENV === 'production') register();
else unregister();
