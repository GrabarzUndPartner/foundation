/* eslint-disable no-secrets/no-secrets */
import { join, resolve } from 'path';
import { promises } from 'fs';
import { beforeAll, describe, it, expect } from 'vitest';
import { joinURL } from 'ufo';
import validator from 'html-validator';
import {
  startStaticServer,
  getDom,
  getHTML,
  generate
} from './utils';

const testDir = resolve(__dirname, '.test');
const distDir = resolve(testDir, 'dist');
const buildDir = join(testDir, '.nuxt');

const runtime = { serverUrl: null };

beforeAll(async () => {
  await generate(buildDir, distDir);
  runtime.serverUrl = (await startStaticServer(distDir)).url;
});

describe('🧐 inspect generated html', () => {
  const paths = [
    '/content-container',
    '/headline'
  ];

  paths.forEach((path) => {
    it(`W3C ${path}`, async () => {
      const url = joinURL(runtime.serverUrl, path);
      const options = {
        url,
        format: 'text',
        data: await promises.readFile(joinURL(process.cwd(), './test/.test/dist', path, 'index.html'), 'utf8')
      };
      const result = await validator(options);
      if (!result.startsWith('The document validates according to the specified schema(s).')) {
        throw new Error(`Url: ${url}\n${result}`);
      }
    });
  });

  markupTests();
});

function markupTests () {
  let html, dom;
  it('Test Structure (/content-container)', async () => {
    html = await getHTML(join(distDir, '/content-container'));
    dom = getDom(html);

    // layout
    expect(dom.querySelector('div#layout')).not.toBeNull();
    expect(dom.querySelector('div#layout > header')).not.toBeNull();
    expect(dom.querySelector('div#layout > footer')).not.toBeNull();

    // page
    expect(dom.querySelector('main#page')).not.toBeNull();
    // pageDescribeComponent

    expect(dom.querySelector('div#pageDescribeComponent')).not.toBeNull();
    expect(dom.querySelector('div#pageDescribeComponent > header h1')).not.toBeNull();

    // pageComponents
    expect(dom.querySelector('div#pageComponents')).not.toBeNull();

    // firstContentComponent
    expect(dom.querySelector('article#firstContentComponent')).not.toBeNull();
    expect(dom.querySelector('article#firstContentComponent > header h2')).not.toBeNull();

    // secondaryContentComponent
    expect(dom.querySelector('article#secondaryContentComponent')).not.toBeNull();
    expect(dom.querySelector('article#secondaryContentComponent > section')).not.toBeNull();
    expect(dom.querySelector('article#secondaryContentComponent > section > header h2')).not.toBeNull();

    // tertiaryContentComponent
    expect(dom.querySelector('article#tertiaryContentComponent')).not.toBeNull();
    expect(dom.querySelector('article#tertiaryContentComponent > header h2')).not.toBeNull();
    expect(dom.querySelector('article#tertiaryContentComponent > section')).not.toBeNull();
    expect(dom.querySelector('article#tertiaryContentComponent > section > article')).not.toBeNull();
    expect(dom.querySelector('article#tertiaryContentComponent > section > article > header h3')).not.toBeNull();
  });

  it('Test Headline (/headline)', async () => {
    html = await getHTML(join(distDir, 'headline'));
    dom = getDom(html);

    expect(dom.querySelector('h1#headline1')).not.toBeNull();
    expect(dom.querySelector('h2#headline2_1')).not.toBeNull();
    expect(dom.querySelector('h2#headline2_2')).not.toBeNull();
    expect(dom.querySelector('h3#headline3_1')).not.toBeNull();
    expect(dom.querySelector('h3#headline3_2')).not.toBeNull();
    expect(dom.querySelector('h4#headline4_1')).not.toBeNull();
    expect(dom.querySelector('h4#headline4_2')).not.toBeNull();
    expect(dom.querySelector('h5#headline5_1')).not.toBeNull();
    expect(dom.querySelector('h5#headline5_2')).not.toBeNull();
    expect(dom.querySelector('h6#headline6_1')).not.toBeNull();
    expect(dom.querySelector('h6#headline6_2')).not.toBeNull();
    expect(dom.querySelector('h6#headline7_1')).not.toBeNull();

    // Clamp Headline Level 6
  });
}
