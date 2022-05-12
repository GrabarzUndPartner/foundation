/* eslint-disable no-secrets/no-secrets */
import { join, resolve } from 'path';
import { beforeAll, describe, it, expect } from 'vitest';
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
  markupTests();
});

function markupTests () {
  let html, dom;
  it('Test Structure (/structure)', async () => {
    html = await getHTML(join(distDir, 'structure'));
    dom = getDom(html);

    // layout
    expect(dom.querySelector('div#layout')).not.toBeNull();
    expect(dom.querySelector('div#layout > header')).not.toBeNull();
    expect(dom.querySelector('div#layout > footer')).not.toBeNull();

    // page
    expect(dom.querySelector('main#page')).not.toBeNull();
    // pageDescribeComponent

    expect(dom.querySelector('section#pageDescribeComponent')).not.toBeNull();
    expect(dom.querySelector('section#pageDescribeComponent > header h1')).not.toBeNull();

    // pageComponents
    expect(dom.querySelector('section#pageComponents')).not.toBeNull();

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
}
