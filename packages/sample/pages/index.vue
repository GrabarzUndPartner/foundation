<template>
  <base-button @click="onClick" />
</template>

<script>
import BaseButton from '@foundation/core/Button';
export default {
  components: {
    BaseButton
  },
  methods: {
    onClick () {
      console.log('click button');
    }
  }
};
</script>
