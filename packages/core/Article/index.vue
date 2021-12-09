<template>
  <article class="article" v-bind="$attrs" v-on="$listeners">
    <header>
      <nav v-if="$slots.category" class="category" aria-label="secondary">
        <slot name="category" />
      </nav>
      <component :is="sectionLevel" v-if="$slots.headline" v-bind="$attrs" v-on="$listeners">
        <slot name="headline" />
      </component>
      <p v-if="$slots.subline" class="subline" role="doc-subtitle">
        <slot name="subline" />
      </p>
    </header>
    <slot name="default" />
  </article>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    level: {
      type: Number,
      required: true
    }
  },

  computed: {
    sectionLevel () {
      return `h${this.level}`;
    }
  }
};
</script>
