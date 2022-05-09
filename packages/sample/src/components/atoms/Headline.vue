<template>
  <component
    :is="`h${currentHeadlineLevel}`"
    class="atom-headline"
    :class="styleClasses"
    v-bind="$attrs"
    :font="[
      $getFont('Raleway',700),
      $getFont('Poppins',500, 'normal', {selector: 'span:first-child'})
    ]"
    :title="`h${currentHeadlineLevel}`"
    v-on="$listeners"
  >
    <slot>
      <span v-if="overline">{{ overline }}</span>
      <span>{{ text }}</span>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'DocumentHeading',
  inject: {
    parentLevel: {
      from: 'parentLevel',
      default: null
    }
  },
  props: {
    overline: {
      type: String,
      default: 'Atom Headline (Overline)'
    },
    text: {
      type: String,
      default: 'Atom Headline (Text)'
    },

    level: {
      type: [Number],
      default: null
    },
    debugMode: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentHeadlineLevel () {
      const result = this.level || this.parentLevel || 1;
      return getMax(result);
    },
    styleClasses () {
      return {
        'style-debug-mode': this.debugMode
      };
    }
  }

};

function getMax (number) {
  return Math.max(1, Math.min(number, 6));
}
</script>
<style lang="postcss" scoped>
.atom-headline {
  position: relative;
  padding-left: 3em;
  font-size: 1em;

  /* font-size: 1em; */

  & span {
    display: block;
  }

  & span:first-child {
    margin-bottom: em(10, var(--font-size-overline));
    font-size: em(var(--font-size-overline));
  }

  & span:last-child {
    font-size: em(var(--font-size-text));
  }

  &.style-debug-mode {
    padding-left: 3em;

    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 1.5em;
      font-size: 1.2em;
      font-weight: bold;
      content: attr(title);
      border: 2px solid black;
      border-radius: 50%;
      transform: translateY(-50%);
    }

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
