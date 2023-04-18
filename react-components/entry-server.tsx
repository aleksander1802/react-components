import React from 'react';
import ReactDOMServer, { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './src/App';

import { Provider } from 'react-redux';
import store from './src/store/store';
import { StaticRouter } from 'react-router-dom/server';

export function render(url: string, options?: RenderToPipeableStreamOptions): PipeableStream {
  const stream = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
}
