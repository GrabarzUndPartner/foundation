<template>
  <mutation-file-select
    class="atom-button-file"
    icon="upload"
    :component="component"
    v-bind="$attrs"
    v-on="$listeners"
    @files="onFiles"
  >
    <template #default="{label}">
      <span>
        <slot>
          {{ label }}<span v-if="displayValue"> ({{ displayValue }})</span>
        </slot>
      </span>
    </template>
  </mutation-file-select>
</template>

<script>
import MutationFileSelect from '@foundation/core/mutation/FileSelect';
import Button from '../Button';

export default {
  components: {
    MutationFileSelect
  },
  inheritAttrs: false,

  props: {
    value: {
      type: Array,
      default () {
        return [];
      }
    }
  },

  data () {
    return {
      component: Button,
      model: this.value
    };
  },

  computed: {
    displayValue () {
      if (this.model.length > 1) {
        return `${this.model.length} Files`;
      } else if (this.model.length === 1) {
        return `${this.model[0].name}`;
      } else {
        return null;
      }
    }
  },

  watch: {
    value: {
      handler () {
        this.model = this.value;
      }
    }
  },

  methods: {
    onFiles (files) {
      this.model = files;
      this.$emit('input', files);
    }
  }

};
</script>

<style lang="postcss" scoped>
.button-file {
  /* empty */
}
</style>
