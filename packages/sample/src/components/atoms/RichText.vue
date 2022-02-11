<template>
  <base-rich-text
    :font="[
      $getFont('Poppins'),
      $getFont('Poppins', 700, 'normal',{selector: 'strong'}),
      $getFont('Poppins', 400, 'italic',{selector: 'em'}),
      $getFont('Poppins', 700, 'italic',{selector: 'strong em, em strong'})
    ]"
    v-bind="$attrs"
    class="atom-rich-text"
    v-on="$listeners"
  />
</template>

<script>
import BaseRichText from '@foundation/core/RichText';
export default {
  components: { BaseRichText },
  inheritAttrs: false
};
</script>
<style lang="postcss" scoped>
.atom-rich-text {
  font-size: 1em;

  & >>> {
    & p,
    & ul,
    & ol {
      margin: 0;
    }

    & * + p,
    & * + ul,
    & * + ol {
      margin-top: em(10);
    }

  }

}
</style>
