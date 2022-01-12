<template>
  <collapsible-container
    class="flyout-navi"
    :hide-native-input="true"
    v-bind="$attrs"
    :dataset="dataset"
    :collapsible="true"
    v-on="$listeners"
  >
    <template #label="{option}">
      <slot name="label" :option="option">
        {{ option.label }}
      </slot>
    </template>
    <template #content="content">
      <slot name="content" v-bind="content" />
    </template>
  </collapsible-container>
</template>

<script>
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import Dataset from '../../classes/Dataset';
import CollapsibleContainer from '../../../CollapsibleContainer';

export default {
  components: {
    CollapsibleContainer
  },

  inheritAttrs: false,

  props: {
    dataset: {
      type: Dataset,
      required: true
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
