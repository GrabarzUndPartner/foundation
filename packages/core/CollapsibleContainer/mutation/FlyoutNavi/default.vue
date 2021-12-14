<template>
  <flyout-navi class="design-default" :dataset="dataset">
    <template #content="{show, option}">
      <section v-show="show">
        <slot name="content" :content="{show, option}">
          {{ option.content }}
        </slot>
      </section>
    </template>
  </flyout-navi>
</template>

<script>

import Dataset from '../../classes/Dataset';
import Option from '../../classes/Option';
import Model from '../../classes/Model';
import FlyoutNavi from './index';

export default {
  components: { FlyoutNavi },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      default () {
        const model = new Model(`default-${Math.random()}`, null);
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
.design-default {
  & >>> label {
    width: 120px;
    padding: 5px 10px;
    background: #ccc;
  }

  /* & >>> section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  } */

}
</style>
