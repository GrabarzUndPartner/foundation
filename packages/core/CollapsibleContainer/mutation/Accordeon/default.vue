<template>
  <accordeon
    class="design-default"
    v-bind="$attrs"
    :dataset="dataset"
    v-on="$listeners"
  >
    <template #label="{option}">
      {{ option.label }}
      <icon size="small">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </icon>
    </template>
    <template #content="{show, option}">
      <accordeon-transition-expand>
        <section v-show="show">
          <slot name="content" :option="option">
            {{ option.content }}
          </slot>
        </section>
      </accordeon-transition-expand>
    </template>
  </accordeon>
</template>

<script>

import Icon from '../../../Icon';
import AccordeonTransitionExpand from '../../transition/expand';
import Dataset from '../../classes/Dataset';
import Model from '../../classes/Model';
import Option from '../../classes/Option';
import Accordeon from './index';

export default {
  components: {
    Accordeon,
    AccordeonTransitionExpand,
    Icon
  },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      default () {
        const model = new Model(`default-${Math.random()}`, 'b');
        const options = [
          { label: 'LABEL A', value: 'a', content: 'CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A ' },
          { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
          { label: 'LABEL C', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
        ].map(({ label, value, content }) => {
          return new Option(label, value, content);
        });
        return new Dataset(options, model);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.accordeon.design-default {
  display: flex;
  flex-wrap: wrap;

  & >>> {
    & label {
      display: block;
      width: 100%;

      & .icon svg {
        width: 48px;
      }
    }
  }

  & > section {
    /* display: block !important; */
    width: 100%;
  }
}
</style>

<style lang="postcss" type="design" scoped>
.design-default {
  & >>> {
    & input {
      &:focus + label {
        box-shadow: 0 0 5px #2196f3;
      }

      &:checked + label > .icon svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
