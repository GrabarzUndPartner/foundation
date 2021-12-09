<template>
  <section class="collapsible-container">
    <base-select
      v-for="(option) in options"
      :id="`${model.name}-${option.key}`"
      :key="`${model.name}-${option.key}`"
      v-model="model.value"
      v-bind="$attrs"
      :name="model.name"
      :option="option.value"
      :unselectable="collapsible"
    >
      <template #label>
        <slot name="label" :option="option">
          {{ option.label }}
        </slot>
      </template>
      <template #extend>
        <slot name="content" :option="option" :show="show(option, model)">
          <div v-if="show(option, model)">
            {{ option.content }}
          </div>
        </slot>
      </template>
    </base-select>
  </section>
</template>

<script>
import BaseSelect from '../base/Select';
import Dataset from './classes/Dataset';

export default {
  components: {
    BaseSelect
  },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      required: true
    },

    collapsible: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      name: this.dataset.name,
      model: this.dataset.model,
      options: this.dataset.options
    };
  },

  methods: {
    show (option, model) {
      return option.value === model.value || process.server;
    }
  }
};
</script>

<style lang="postcss" scoped>
.collapsible-container {
  & >>> input {
    & + label + section {
      height: 0;
      overflow: hidden;
    }

    &:checked + label + section {
      height: auto;
    }
  }
}
</style>
