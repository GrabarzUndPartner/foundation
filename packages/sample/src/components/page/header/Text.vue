<template>
  <div class="page-header-text" v-html="text" />
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default () {
        return '<p>Text…</p>';
      }
    }
  }
};

</script>

<style lang="postcss" scoped>
.page-header-text {
  /* empty */
}

</style>

