/* eslint-disable no-secrets/no-secrets */

import { describe, it, expect } from 'vitest';
import { chromium, firefox } from 'playwright';
import { joinURL } from 'ufo';

const BROWSERS = { CHROMIUM: 0, FIREFOX: 1 };

const browsers = new Map([
  [BROWSERS.CHROMIUM, chromium.launch()],
  [BROWSERS.FIREFOX, firefox.launch()]
]);

export default (runtime) => {
  describe('🧐 inspect browser (chromium)', () => {
    browserTests({ browser: BROWSERS.CHROMIUM, runtime });
  });

  describe('🧐 inspect browser (firefox)', () => {
    browserTests({ browser: BROWSERS.FIREFOX, runtime });
  });

  function browserTests ({ browser, runtime }) {
    const createPage = async (path) => {
      const page = await (await browsers.get(browser)).newPage();
      await page.goto(joinURL(runtime.serverUrl, path));
      return page;
    };

    it('collapsible-container (switch between items)', async () => {
      const page = await createPage('/collapsible-container/');
      await page.waitForLoadState('networkidle');

      expect(await page.evaluate(() => document.querySelector('#collapsible--container-test-4927461488080457:checked'))).not.toBeNull();

      await page.evaluate(() => document.querySelector('[for="collapsible--container-test-1753892103620612"]').click());

      expect(await page.evaluate(() => document.querySelector('#collapsible--container-test-4927461488080457:checked'))).toBeNull();
      expect(await page.evaluate(() => document.querySelector('#collapsible--container-test-1753892103620612:checked'))).not.toBeNull();

      await page.evaluate(() => document.querySelector('[for="collapsible--container-test-1775097247161763"]').click());

      expect(await page.evaluate(() => document.querySelector('#collapsible--container-test-1753892103620612:checked'))).toBeNull();
      expect(await page.evaluate(() => document.querySelector('#collapsible--container-test-1775097247161763:checked'))).not.toBeNull();
    });
  }
};
