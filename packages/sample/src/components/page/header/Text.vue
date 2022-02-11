<template>
  <div class="page-header-text">
    <atom-rich-text :value="text" />
  </div>
</template>

<script>
import AtomRichText from '@/components/atoms/RichText';
export default {
  components: {
    AtomRichText
  },
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

