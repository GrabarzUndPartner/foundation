<template>
  <div class="page-header" :style="{'--visible': visible}">
    <div class="inner">
      <div>
        <span class="logo"><span>Foundation Sample</span></span>
      </div>
      <page-header-flyout-navi class="flyout-navi" :dataset="dataset" />
    </div>
  </div>
</template>
<script>

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';
import Option from '@foundation/core/CollapsibleContainer/classes/Option';

import { fromEvent } from 'rxjs';
import { startWith, share } from 'rxjs/operators';
import PageHeaderFlyoutNavi from '@/components/page/header/FlyoutNavi';

export default {
  components: {
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
    padding-bottom: em(32);
    background: #fff;

    & > div {
      position: relative;
      transition: height 0.1s;
    }

  }

  & .logo {
    display: block;
    padding: em(24) em(16);
    padding-right: 0;
    font-family: sans-serif;

    & > span {
      font-size: calc(em(32) * (1 - (var(--visible) / 3)));
    }
  }

}

</style>

