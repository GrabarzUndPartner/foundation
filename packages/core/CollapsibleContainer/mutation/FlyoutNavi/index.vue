<template>
  <collapsible-container
    class="flyout-navi"
    :hide-native-input="true"
    v-bind="$attrs"
    :dataset="dataset"
    :collapsible="true"
    v-on="$listeners"
  >
    <template #content="content">
      <slot name="content" v-bind="content" />
    </template>
  </collapsible-container>
</template>

<script>
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
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
    }
  },

  data () {
    return {
      subscriptions: new Subscription()
    };
  },

  mounted () {
    const model = this.dataset.model;

    this.subscriptions.add(fromEvent(document, 'pointermove', { passive: true })
      .pipe(filter(e => !this.$el.contains(e.target) && model.value != null))
      .subscribe(() => {
        model.value = null;
      }));
  },

  destroyed () {
    this.subscriptions.unsubscribe();
  }
};
</script>

<style lang="postcss" scoped>
.flyout-navi >>> {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & label {
    flex-grow: 0;
    order: 0;
    width: auto;
  }

  & section {
    order: 1;
    width: 100%;
  }
}
</style>
