<template>
  <collapsible-container
    class="accordeon"
    :hide-native-input="true"
    v-bind="$attrs"
    :dataset="dataset"
    :collapsible="collapsible"
    v-on="$listeners"
  >
    <template #label="{option}">
      <slot name="label" :option="option">
        {{ option.label }}
      </slot>
    </template>
    <template #content="{option, show}">
      <slot name="content" :option="option" :show="show">
        <div v-if="option.show">
          {{ option.content }}
        </div>
      </slot>
    </template>
  </collapsible-container>
</template>

<script>
import Dataset from '../../classes/Dataset';
import Model from '../../classes/Model';
import Option from '../../classes/Option';
import CollapsibleContainer from '../../../CollapsibleContainer';

export default {
  components: {
    CollapsibleContainer
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
    },

    collapsible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

