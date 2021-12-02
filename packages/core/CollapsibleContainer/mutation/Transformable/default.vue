<template>
  <transformable class="design-default" :dataset="dataset">
    <template #content="{option}">
      {{ option.content }}
    </template>
  </transformable>
</template>

<script>

import Dataset from '../../classes/Dataset';
import Option from '../../classes/Option';
import Model from '../../classes/Model';
import Transformable from './index';

export default {
  components: { Transformable },

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
