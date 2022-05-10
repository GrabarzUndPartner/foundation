
import { join, resolve } from 'path';
import fs from 'fs';
import nuxtBabelPresetApp from '@nuxt/babel-preset-app';
import dotenv from 'dotenv';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import * as postcssPresetEnvImportFrom from './src/globals/postcss/preset-env/importFrom';
import * as postcssFunctions from './src/globals/postcss/functions';

dotenv.config({ path: resolve(__dirname, '../../.env') });

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
      const key = process.env.SERVER_SSL_KEY_PATH || join(dir, 'server.key');
      const crt = process.env.SERVER_SSL_CRT_PATH || join(dir, 'server.crt');

      if (fs.existsSync(key) && fs.existsSync(crt)) {
        return { key: fs.readFileSync(key), cert: fs.readFileSync(crt) };
      } else {
        return null;
      }
    })()
  },

  alias: {
    '@foundation/core': resolve(__dirname, '../', 'core')
  },

  modern: isDev ? false : 'client',

  head: {
    title: 'G&P Foundation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'G&P Foundation - Component Blueprints' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  build: {

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](vue-i18n|@js-basics\/vector|node-libs-browser)[\\/]/,
            name: 'vendor'
          }
        }
      }
    },

    transpile: [
      '@foundation/core',
      '@splidejs/splide-extension-intersection',
      'vue-headings'
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
            ]
          },
          server: { node: 'current' }
        };
        const envUseBuiltins = {
          client: 'usage',
          modern: 'entry'
        };
        return [
          [
            nuxtBabelPresetApp, {
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
          importFrom: postcssPresetEnvImportFrom
        },
        'postcss-normalize': {},
        'postcss-momentum-scrolling': [
          'scroll'
        ],
        'postcss-functions': {
          functions: postcssFunctions
        },
        'rucksack-css': {},
        lost: {
          gutter: '15px',
          flexbox: 'flex',
          cycle: 'auto'
        }
      },
      order: 'cssnanoLast'
    },

    extend (config) {
      if (hasBuildAnalyze()) {
        config.plugins.push(new BundleAnalyzerPlugin({
          reportFilename: resolve(`.reports/webpack/${config.name}.html`),
          statsFilename: resolve(`.reports/webpack/stats/${config.name}.json`),
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false,
          logLevel: 'info',
          defaultSizes: 'gzip',
          statsOptions: 'normal'
        }));
      }
    }
  },

  router: {
    base: getBasePath()
  },

  generate: {
    cache: false
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

  plugins: [
    {
      src: '../../core/plugins/headings'
    }
  ],

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
    fonts: [
      {
        family: 'Poppins',
        fallback: [
          'sans-serif'
        ],
        variances: [
        // 100
          {
            style: 'normal',
            weight: 100,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-100.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-100.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 100,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-100italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-100italic.woff2', type: 'woff2' }
            ]
          },
          // 200
          {
            style: 'normal',
            weight: 200,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-200.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-200.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 200,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-200italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-200italic.woff2', type: 'woff2' }
            ]
          },
          // 300
          {
            style: 'normal',
            weight: 300,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-300.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-300.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 300,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-300italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-300italic.woff2', type: 'woff2' }
            ]
          },
          // regular
          {
            style: 'normal',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-regular.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-regular.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-italic.woff2', type: 'woff2' }
            ]
          },
          // 500
          {
            style: 'normal',
            weight: 500,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-500.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-500.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 500,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-500italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-500italic.woff2', type: 'woff2' }
            ]
          },
          // 600
          {
            style: 'normal',
            weight: 600,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-600.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-600.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 600,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-600italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-600italic.woff2', type: 'woff2' }
            ]
          },
          // 700
          {
            style: 'normal',
            weight: 700,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-700.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-700.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 700,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-700italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-700italic.woff2', type: 'woff2' }
            ]
          },
          // 800
          {
            style: 'normal',
            weight: 800,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-800.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-800.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 800,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-800italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-800italic.woff2', type: 'woff2' }
            ]
          },
          // 800
          {
            style: 'normal',
            weight: 900,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-900.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-900.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 900,
            sources: [
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-900italic.woff', type: 'woff' },
              { src: '@/assets/fonts/poppins-v19-latin/poppins-v19-latin-900italic.woff2', type: 'woff2' }
            ]
          }
        ]
      },
      {
        family: 'Raleway',
        fallback: [
          'sans-serif'
        ],
        variances: [
          // 100
          {
            style: 'normal',
            weight: 100,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-100.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-100.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 100,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-100italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-100italic.woff2', type: 'woff2' }
            ]
          },
          // 200
          {
            style: 'normal',
            weight: 200,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-200.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-200.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 200,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-200italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-200italic.woff2', type: 'woff2' }
            ]
          },
          // 300
          {
            style: 'normal',
            weight: 300,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-300.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-300.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 300,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-300italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-300italic.woff2', type: 'woff2' }
            ]
          },
          // regular
          {
            style: 'normal',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-regular.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-regular.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 400,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-italic.woff2', type: 'woff2' }
            ]
          },
          // 500
          {
            style: 'normal',
            weight: 500,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-500.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-500.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 500,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-500italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-500italic.woff2', type: 'woff2' }
            ]
          },
          // 600
          {
            style: 'normal',
            weight: 600,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-600.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-600.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 600,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-600italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-600italic.woff2', type: 'woff2' }
            ]
          },
          // 700
          {
            style: 'normal',
            weight: 700,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-700.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-700.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 700,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-700italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-700italic.woff2', type: 'woff2' }
            ]
          },
          // 800
          {
            style: 'normal',
            weight: 800,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-800.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-800.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 800,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-800italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-800italic.woff2', type: 'woff2' }
            ]
          },
          // 800
          {
            style: 'normal',
            weight: 900,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-900.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-900.woff2', type: 'woff2' }
            ]
          },
          {
            style: 'italic',
            weight: 900,
            sources: [
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-900italic.woff', type: 'woff' },
              { src: '@/assets/fonts/raleway-v26-latin/raleway-v26-latin-900italic.woff2', type: 'woff2' }
            ]
          }
        ]
      }
    ]
  }

};

function getHost () {
  return process.env.npm_config_host || process.env.SERVER_HOST || 'localhost';
}

function getPort () {
  return process.env.npm_config_port || process.env.SERVER_PORT || 3000;
}

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function hasBuildAnalyze () {
  return process.env.npm_config_build_analyze || process.env.BUILD_ANALYZE;
}
