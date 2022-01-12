<template>
  <transformable class="design-default" :dataset="dataset">
    <template #content="{option}">
      {{ option.content }}
    </template>
  </transformable>
</template>

<script>

import Dataset from '../../classes/Dataset';
import Model from '../../classes/Model';
import Transformable from './index';

export default {
  components: { Transformable },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      default () {
        return new Dataset([
          { label: 'LABEL A', value: 'a', content: 'CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A CONTENT A ' },
          { label: 'LABEL B', value: 'b', content: 'CONTENT B' },
          { label: 'LABEL C', value: 'c', content: 'CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C CONTENT C ' }
        ], new Model(`default-${Math.random()}`, null));
      }
    }
  }

};
</script>
