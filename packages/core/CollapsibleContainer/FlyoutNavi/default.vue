<template>
  <flyout-navi class="design-default" :dataset="dataset">
    <template #label="{option}">
      <span>
        {{ option.label }}
      </span>
    </template>
    <template #content="{show, option}">
      <transition-expand>
        <section v-show="show">
          <div>
            <slot name="content" v-bind="{show, option}">
              {{ option.content }}
            </slot>
          </div>
        </section>
      </transition-expand>
    </template>
  </flyout-navi>
</template>

<script>

import Dataset from '../classes/Dataset';
import Model from '../classes/Model';
import TransitionExpand from '../transition/expand';
import FlyoutNavi from './index';

export default {
  components: { FlyoutNavi, TransitionExpand },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      default () {
        return new Dataset([
          { label: 'LABEL A', value: 'a', content: 'CONTENT A' },
          { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
          { label: 'LABEL C', value: 'c', content: 'CONTENT C' }
        ], new Model(`default-${Math.random()}`, null));
      }
    }
  }

};
</script>

<style lang="postcss" scoped>
.design-default {
  font-family: monospace;
  background: #eee;

  & >>> {
    & label {
      align-items: center;
      padding: 8px;
      line-height: 1;
      cursor: pointer;
      background: #eee;

      & > span {
        font-size: 14px;
      }
    }

    & input:focus + label {
      color: #fff;
      background: #aaa;
    }

    & input:checked + label,
    & label:hover {
      color: #fff;
      background: #333;
    }

    & section {
      background: #fff;

      & > div {
        padding: 8px;
        border: solid #eee 1px;
        border-top-width: 0;
      }
    }
  }

}
</style>
