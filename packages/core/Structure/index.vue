<template>
  <component
    :is="currentTag"
    :data-debug-parent-level="parentLevel"
    :data-debug-parent-tag-level="parentTagLevel"
    :data-debug-level="currentLevel"
    :data-debug-tag-level="tagLevel"
    :data-debug-tag="currentTag"
  >
    <header v-if="$slots.header || $scopedSlots.header">
      <slot name="header" />
    </header>
    <slot />
    <footer v-if="$slots.footer || $scopedSlots.footer">
      <slot name="footer" />
    </footer>
  </component>
</template>

<script>

export default {
  provide () {
    return {
      parentLevel: this.currentLevel,
      parentTagLevel: this.tagLevel
    };
  },
  inject: {
    parentLevel: {
      from: 'parentLevel',
      default: 0
    },
    parentTagLevel: {
      from: 'parentTagLevel',
      default: 0
    }
  },

  inheritAttrs: false,

  props: {
    /**
     * Wenn gesetzt, werden Context und Tag Level vom Parent übernommen.
     * Einsatz: Layout und erste Seiten Komponente
     */
    static: {
      type: Boolean,
      default: false
    },
    /**
     * Wenn gesetzt, wird Context vom Parent übernommen.
     */
    embed: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: null
    },
    tags: {
      type: Array,
      default () {
        return ['article', 'section'];
      }
    }
  },

  computed: {
    currentLevel () {
      if (this.static || this.embed) {
        return this.parentLevel;
      }
      return this.parentLevel + 1;
    },

    tagLevel () {
      if (this.static) {
        return this.parentTagLevel;
      }
      return this.parentTagLevel + 1;
    },

    currentTag () {
      if (this.tag) {
        return this.tag;
      }

      const level = this.tagLevel;

      return this.tags[level % this.tags.length];
    }
  }
};
</script>

<style lang="postcss" scoped>
main,
article,
section {
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    box-sizing: border-box;
    pointer-events: none;
    content: "";
    border: solid var(--tag-color) 4px;
  }

  &::after {
    position: absolute;
    z-index: 10000;
    padding: 0.8em 0.4em;
    font-family: monospace;
    font-size: 11px;
    color: white;
    pointer-events: none;
    content:
      attr(data-debug-tag) " - pLevel: " attr(data-debug-parent-level) " - pTagLevel: "
      attr(data-debug-parent-tag-level) " - Level: " attr(data-debug-level);
    background: var(--tag-color);
  }

}

header {
  border: solid blue 2px;
}

footer {
  border: solid orange 2px;
}

article {
  --tag-color: green;

  &::after {
    top: 0;
    right: 0;
  }
}

section {
  --tag-color: red;

  &::after {
    top: auto;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }
}

main {
  --tag-color: magenta;

  &::after {
    top: 0;
    left: 0%;
  }
}

</style>
