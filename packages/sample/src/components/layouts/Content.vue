<template>
  <document-section
    class="layout-content"
    :class="styleClasses"
    :tag="currentTag"
    v-bind="$attrs"
    :title="debugTitle"
    :data-id="debugId"
    :data-level="currentLevel"
    :level="currentLevel"
    v-on="$listeners"
  >
    <header v-if="$slots.header">
      <slot name="header" />
    </header>
    <slot />
    <slot name="footer" />
  </document-section>
</template>

<script>
const TAGS = ['article', 'section'];

export default {
  provide () {
    return {
      parentLevel: this.currentLevel
    };
  },
  inject: {
    parentLevel: {
      from: 'parentLevel',
      default: null
    }
  },
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    isTopLevel: {
      type: Boolean,
      default: false
    },
    forcedTag: {
      type: String,
      default: null
    },
    debugId: {
      type: String,
      default: null
    },
    debugMode: {
      type: String,
      default: null
    }
  },
  computed: {
    currentLevel () {
      if (!this.parentLevel || this.isTopLevel) {
        return 1;
      }

      if (this.disabled) {
        return this.parentLevel;
      }

      return this.parentLevel + 1;
    },
    currentTag () {
      if (this.forcedTag) {
        return this.forcedTag;
      }
      return TAGS[(this.currentLevel) % 2];
    },
    debugTitle () {
      return `${this.currentTag} - Level: ${this.currentLevel}`;
    },
    styleClasses () {
      return {
        'style-debug-mode': this.debugMode
      };
    }

  },
  mounted () {
    console.table([
      {
        id: this.debugId,
        parentTag: this.parentTag,
        currentTag: this.currentTag
      }
    ]);
  }
};
</script>

<style lang="postcss" scoped>
.layout-content {
  position: relative;

  &.style-debug-mode {
    padding: 25px;
    border: 1px solid #ccc;

    & .layout-content + .layout-content {
      margin-top: 10px;
    }

    &::before {
      position: absolute;
      top: 5px;
      left: 5px;
      font-size: 15px;
      font-style: italic;
      content: attr(title);
    }
  }
}
</style>
