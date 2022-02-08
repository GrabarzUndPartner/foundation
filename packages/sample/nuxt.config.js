
import path from 'path';
import fs from 'fs';

import * as functions from './src/globals/postcss/functions';

const isDev = process.env.NODE_ENV === 'development'; ;;

export default {
  dev: isDev,
  target: 'static',
  srcDir: 'src/',

  server: {
    host: getHost(),
    port: getPort(),
    timing: false,
    https: (function () {
      const dir = './env/cert';
      const key = path.join(dir, 'server.key');
      const crt = path.join(dir, 'server.crt');

      if (fs.existsSync(key) && fs.existsSync(crt)) {
        return { key: fs.readFileSync(key), cert: fs.readFileSync(crt) };
      } else {
        return null;
      }
    })()
  },

  alias: {
    '@foundation/core': path.resolve(__dirname, '../', 'core')
  },

  modern: isDev ? false : 'client',

  head: {
    title: 'sample',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  build: {

    transpile: [
      '@foundation/core',
      '@splidejs/splide-extension-intersection'
    ],

    analyze: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js'
    },
    babel: {
      presets ({ envName, isServer, isModern }) {
        const envTargets = {
          client: {
            browsers: [
              'last 2 versions'
            ],
            ie: 11
          },
          server: { node: 'current' }
        };
        const envUseBuiltins = {
          client: 'usage',
          modern: 'entry'
        };
        return [
          [
            require.resolve('@nuxt/babel-preset-app'), {
              targets: envTargets[String(envName)],
              useBuiltIns: envUseBuiltins[String(envName)],
              // #####
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3, proposals: true },
              forceAllTransforms: !isDev && !isModern && !isServer,
              shippedProposals: true,
              loose: true,
              bugfixes: true,
              polyfills: [
                'es.promise',
                'es.symbol'
              ]
            }
          ]
        ];
      }
    },

    postcss: {
      plugins: {
        'postcss-preset-env': {
          preserve: true,
          stage: 0,
          importFrom: [
            'src/globals/postcss.js'
          ]
        },
        'postcss-normalize': {},
        'postcss-momentum-scrolling': [
          'scroll'
        ],
        'postcss-functions': {
          functions
        },
        rfs: {
          twoDimensional: false,
          baseValue: 16,
          unit: 'rem',
          breakpoint: 1200,
          breakpointUnit: 'px',
          factor: 10,
          class: false,
          unitPrecision: 6,
          safariIframeResizeBugFix: false,
          remValue: 16
        },
        'rucksack-css': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      },
      order: 'cssnanoLast'
    }
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },

    domains: [
      'picsum.photos', 'img.youtube.com', 'i.vimeocdn.com', 'i.pickadummy.com'
    ],
    alias: {
      picsum: 'https://picsum.photos',
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
      pickadummy: 'https://i.pickadummy.com'
    }
  },

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@/modules/svg',
    'nuxt-speedkit'
  ],
  speedkit: {
    componentAutoImport: true
  }

};

function getHost () {
  return process.env.npm_config_host || process.env.HOST || 'localhost';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000;
}
