/* eslint-disable no-secrets/no-secrets */
import { join, resolve } from 'path';
import { beforeAll } from 'vitest';

import {
  startStaticServer,
  generate
} from './utils';
import html from './tests/html';
import browser from './tests/browser';

const testDir = resolve(__dirname, '.test');
const distDir = resolve(testDir, 'dist');
const buildDir = join(testDir, '.nuxt');

const runtime = { serverUrl: null };

beforeAll(async () => {
  await generate(buildDir, distDir);
  runtime.serverUrl = (await startStaticServer(distDir)).url;
});

html(runtime, distDir);
browser(runtime);
