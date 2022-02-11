<template>
  <nuxt-link
    v-slot="{href, navigate, isActive, isExactActive }"
    custom
    :to="to"
    class="link"
  >
    <a
      :href="!disabled && getHref(href)"
      :disabled="disabled"
      v-bind="{...$attrs, to: undefined}"
      :class="{'nuxt-link-active':isActive, 'nuxt-link-exact-active': isExactActive}"
      v-on="listeners(navigate, isExternal(href))"
    >
      <slot name="default">{{ $attrs.title }}</slot>
    </a>
  </nuxt-link>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    to: {
      type: [Object, String],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },

    external: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    isExternal (href) {
      return /https:\/\//.test(href);
    },
    getHref (href) {
      if (this.external || this.isExternal(href)) {
        return href.replace(/^\//, '');
      }
      return href;
    },

    listeners (navigate, external) {
      // eslint-disable-next-line no-empty-function
      navigate = (this.disabled || external) ? () => {} : navigate;
      return Object.assign({}, this.$listeners, { click: navigate, 'keypress.enter': navigate });
    }
  }
};

</script>
