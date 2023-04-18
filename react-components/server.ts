import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { NextFunction, Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const cwd = process.cwd();

  const vite = await createViteServer({
    root: cwd,
    server: { middlewareMode: true, hmr: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);
      const html = template.split(`<!--app-html-->`);
      const render = (await vite.ssrLoadModule('./entry-server.tsx')).render as (
        url: string,
        options?: RenderToPipeableStreamOptions
      ) => PipeableStream;

      const { pipe } = render(url, {
        onShellReady() {
          const prevHtml = html[0];
          res.write(prevHtml);
          pipe(res);
        },
        onAllReady() {
          const resHtml = html.join('');
          res.write(resHtml);
          res.end();
        },
      });
    } catch (e: unknown) {
      const err = e as Error;
      vite.ssrFixStacktrace(err);
      next(err);
    }
  });

  const port = process.env.PORT || 5173;

  app.listen(port, () => console.log(`App is listening on http://localhost:${port}`));
}

createServer();
