<template>
  <div class="page-header" :style="{'--visible': visible}">
    <div class="inner">
      <div>
        <span class="logo">Foundation Sample</span>
      </div>
      <base-flyout-navi class="flyout-navi" :dataset="dataset">
        <template #content="{option}">
          <component :is="getContentComponent(option.content.type)" v-bind="option.content.props" />
        </template>
      </base-flyout-navi>
    </div>
  </div>
</template>
<script>

import Dataset from '@foundation/core/CollapsibleContainer/classes/Dataset';
import Model from '@foundation/core/CollapsibleContainer/classes/Model';
import Option from '@foundation/core/CollapsibleContainer/classes/Option';
import BaseFlyoutNavi from '@foundation/core/CollapsibleContainer/mutation/FlyoutNavi/default';

import { fromEvent } from 'rxjs';
import { startWith, share } from 'rxjs/operators';

const CONTENT_COMPONENTS = {
  links: () => import('@/components/page/header/Links'),
  text: () => import('@/components/page/header/Text')
}; ;

export default {
  components: {
    BaseFlyoutNavi
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
  },
  methods: {
    getContentComponent (type) {
      return CONTENT_COMPONENTS[String(type)];
    }
  }
};

</script>

<style lang="postcss" scoped>
.page-header {
  --visible: 0;

  position: sticky;
  top: 0;
  z-index: 100;

}

.inner {
  position: relative;
  padding-bottom: calc(32 / 16 * 1em);
  background: #fff;

  & > div {
    position: relative;
    transition: height 0.1s;
  }

}

.logo {
  display: block;
  padding: calc(24 / 32 * 1em) calc(16 / 32 * 1em);
  padding-right: 0;
  font-size: calc(32 / 16 * 1em * (1 - (var(--visible) / 3)));
}

.flyout-navi {
  position: absolute;
  top: calc(100% - (32 / 16 * 1em));
  left: 0;
  width: 100%;
}

</style>

