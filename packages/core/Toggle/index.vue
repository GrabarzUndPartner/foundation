<template>
  <div class="toggle">
    <base-toggle
      v-for="(option) in options"
      :id="option.key"
      :key="option.key"
      v-model="option.model.value"
      v-bind="$attrs"
      :name="option.model.name"
    >
      <template #label>
        <slot name="label" :option="option" />
      </template>
      <template #extend>
        <slot name="content" :option="option" />
      </template>
    </base-toggle>
  </div>
</template>

<script>
import BaseToggle from '../base/Toggle';
import Dataset from './classes/Dataset';
import Model from './classes/Model';

export default {
  components: {
    BaseToggle
  },

  inheritAttrs: false,

  props: {
    options: {
      type: Array,
      default () {
        return [
          new Dataset('Label A', new Model('a', false)),
          new Dataset('Label B', new Model('b', true)),
          new Dataset('Label C', new Model('c', false))
        ];
      }
    }
  }
};
</script>
