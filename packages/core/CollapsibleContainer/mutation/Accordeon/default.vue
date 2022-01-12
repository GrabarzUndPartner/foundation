<template>
  <accordeon
    class="design-default"
    v-bind="$attrs"
    :dataset="dataset"
    v-on="$listeners"
  >
    <template #label="{option}">
      <span>
        {{ option.label }}
      </span>
      <icon-default size="medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </icon-default>
    </template>
    <template #content="{show, option}">
      <transition-expand>
        <section v-show="show">
          <div>
            <slot name="content" :option="option">
              {{ option.content }}
            </slot>
          </div>
        </section>
      </transition-expand>
    </template>
  </accordeon>
</template>

<script>

import IconDefault from '../../../Icon/default';
import TransitionExpand from '../../transition/expand';
import Dataset from '../../classes/Dataset';
import Model from '../../classes/Model';
import Accordeon from './index';

export default {
  components: {
    Accordeon,
    TransitionExpand,
    IconDefault
  },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      default () {
        return new Dataset([
          { label: 'LABEL A', value: 'a', content: 'CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A ' },
          { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
          { label: 'LABEL C', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
        ], new Model(`default-${Math.random()}`, 'b'));
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.accordeon.design-default {
  display: flex;
  flex-wrap: wrap;
  font-family: sans-serif;

  & >>> {
    & input:checked + label {
      & > .icon {
        transform: rotate(180deg);
      }
    }

    & input:checked + label,
    & input:focus + label,
    & label:hover {
      color: #fff;
      background: #333;
    }

    & label {
      display: flex;
      align-items: center;
      width: 100%;
      padding: calc(8 / 16 * 1em);
      background: #eee;

      & .icon {
        order: 0;
        margin-right: calc(8 / 16 * 1em);
        transition: transform 0.2s;
      }

      & > span {
        flex: 1;
        order: 1;
        font-size: calc(14 / 16 * 1em);
        line-height: 1;
      }
    }
  }

  & > section {
    width: 100%;

    & > div {
      padding: calc(8 / 16 * 1em);
      border: solid #eee 1px;
      border-top-width: 0;
    }
  }
}
</style>
