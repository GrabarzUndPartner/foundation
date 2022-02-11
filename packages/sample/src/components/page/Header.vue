<template>
  <div class="page-header" :style="{'--visible': visible}">
    <div class="inner">
      <layout-lost-container>
        <div class="logo-container">
          <nuxt-link to="/" class="logo">
            <span v-font="$getFont('Raleway',700)">Foundation Sample</span>
          </nuxt-link>
        </div>
      </layout-lost-container>
      <layout-lost-container>
        <div class="navigation">
          <page-header-flyout-navi class="flyout-navi" :dataset="dataset" />
        </div>
      </layout-lost-container>
    </div>
  </div>
</template>
<script>

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';
import Option from '@foundation/core/CollapsibleContainer/classes/Option';

import { fromEvent } from 'rxjs';
import { startWith, share } from 'rxjs/operators';
import LayoutLostContainer from '@/components/layouts/LostContainer';
import PageHeaderFlyoutNavi from '@/components/page/header/FlyoutNavi';

export default {
  components: {
    LayoutLostContainer,
    PageHeaderFlyoutNavi
  },
  props: {
    dataset: {
      type: Dataset,
      default () {
        const options = [
          {
            label: 'Links',
            value: 'a',
            content: {
              type: 'links',
              props: {
                links: [
                  {
                    title: 'Link 1',
                    to: '#1'
                  },
                  {
                    title: 'Link 2',
                    to: '#2'
                  },
                  {
                    title: 'Link 3',
                    to: '#3'
                  }
                ]
              }
            }
          }
          // { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
          // { label: 'LABEL C', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
        ].map(({ label, value, content }) => {
          return new Option(label, value, content);
        });
        return new Dataset(options, new Model('default-a', 'b'));
      }
    }
  },
  data () {
    return {
      visible: 0,
      subscriptions: []
    };
  },
  mounted () {
    this.subscriptions = [
      fromEvent(global, 'scroll').pipe(
        startWith(0), share()
      ).subscribe((e) => {
        this.visible = Math.min(global.scrollY / this.$el.offsetHeight, 1);
      })
    ];
  },
  destroyed () {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
};

</script>

<style lang="postcss" scoped>
.page-header {
  --visible: 0;

  position: sticky;
  top: 0;
  z-index: 100;

  & .inner {
    position: relative;
    background: #fff;

    & .logo-container {
      position: relative;
      transition: height 0.1s;
    }

  }

  & >>> .lost-container + .lost-container {
    background: #eee;
  }

  & .navigation {
    position: relative;
    lost-column: 12 / 12;
    height: em(32);
  }

  & .logo {
    display: block;
    padding: calc(em(24) * (1 - (var(--visible) / 3))) em(8);
    padding-right: 0;
    text-decoration: none;

    & > span {
      font-size: calc(em(32) * (1 - (var(--visible) / 3)));
    }
  }

}

</style>

