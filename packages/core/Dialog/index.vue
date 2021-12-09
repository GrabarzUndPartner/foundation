<template>
  <dialog v-bind="$attrs" :open="open">
    <slot name="default" :dialogName="name" :content="content">
      {{ content }}
    </slot>
  </dialog>
</template>

<script>
import store from './store';

export default {
  props: {
    name: {
      type: String,
      default: 'default'
    },

    preventDefaultOpener: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      open: false,
      content: null
    };
  },

  computed: {
    storeName () {
      return `dialog/${this.name}`;
    }
  },

  created () {
    if (!this.$store.hasModule(this.storeName)) {
      this.$store.registerModule(this.storeName, store);
    }

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      console.log(mutation);
      if (mutation.type === `${this.storeName}/open`) {
        this.content = mutation.payload;

        const open = !!mutation.payload;
        this.open = !this.preventDefaultOpener && open;
        this.$emit('open', open);
      }
    });
  },

  beforeDestroy () {
    this.unsubscribe();
  }
};
</script>
