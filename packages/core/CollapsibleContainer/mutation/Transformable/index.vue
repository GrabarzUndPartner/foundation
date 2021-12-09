<template>
  <collapsible-container
    class="transformable"
    :hide-native-input="true"
    v-bind="$attrs"
    :dataset="dataset"
    v-on="$listeners"
  >
    <template #content="{option}">
      {{ option.content }}
    </template>
  </collapsible-container>
</template>

<script>
import Dataset from '../../classes/Dataset';
import Model from '../../classes/Model';
import Option from '../../classes/Option';

export default {
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
.transformable >>> {
  @nest .collapsible-container& {
    @media (--xs) {
      & label {
        flex-grow: 1;
        order: 0;
        width: auto;
      }

      & section {
        order: 1;
      }
    }
  }
}
</style>
