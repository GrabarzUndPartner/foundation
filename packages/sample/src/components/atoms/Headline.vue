<template>
  <base-headline
    class="atom-headline debug"
    v-bind="$attrs"
    :font="[
      $getFont('Raleway',700),
      $getFont('Poppins',500, 'normal', {selector: '.overline'})
    ]"
    v-on="$listeners"
  >
    <slot>
      <span v-if="overline" class="overline">{{ overline }}</span>
      <span>{{ text }}</span>
    </slot>
  </base-headline>
</template>

<script>

import BaseHeadline from '@foundation/core/Headline';

export default {

  components: {
    BaseHeadline
  },

  props: {
    overline: {
      type: String,
      default: 'Atom Headline (Overline)'
    },
    text: {
      type: String,
      default: 'Atom Headline (Text)'
    }
  }

};

</script>

<style lang="postcss" scoped>
.atom-headline {
  position: relative;
  font-size: 1em;

  /* font-size: 1em; */

  & span {
    display: block;
    font-size: em(var(--font-size-text));
  }

  & span.overline {
    font-size: em(var(--font-size-overline));
  }

}

h1 {
  --font-size-overline: 16;
  --font-size-text: 48;
}

h2 {
  --font-size-overline: 12;
  --font-size-text: 32;
}

h3 {
  --font-size-overline: 10;
  --font-size-text: 28;
}

h4 {
  --font-size-overline: 8;
  --font-size-text: 24;
}

h5 {
  --font-size-overline: 8;
  --font-size-text: 20;
}

h6 {
  --font-size-overline: 8;
  --font-size-text: 16;
}

/* h1 {
  margin: calc(10 / 48 * 1em) 0;
  margin-bottom: calc(20 / 48 * 1em);
  font-size: calc(48 / 16 * 1em);
}

h2 {
  margin: calc(10 / 32 * 1em) 0;
  margin-bottom: calc(20 / 32 * 1em);
  font-size: calc(32 / 16 * 1em);
}

h3 {
  margin: calc(10 / 24 * 1em) 0;
  margin-bottom: calc(20 / 24 * 1em);
  font-size: calc(24 / 16 * 1em);
}

h4 {
  margin: calc(10 / 20 * 1em) 0;
  margin-bottom: calc(20 / 20 * 1em);
  font-size: calc(20 / 16 * 1em);
}

h5 {
  margin: calc(10 / 16 * 1em) 0;
  font-size: calc(16 / 16 * 1em);
}

h6 {
  margin: calc(10 / 12 * 1em) 0;
  font-size: calc(12 / 16 * 1em);
} */

</style>
