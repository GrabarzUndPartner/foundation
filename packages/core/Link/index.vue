<template>
  <nuxt-link v-slot="{href, navigate, isActive, isExactActive }" class="link" custom :to="to">
    <a
      :href="getHref(href)"
      class="link"
      :class="{'nuxt-link-active':isActive, 'nuxt-link-exact-active': isExactActive}"
      v-on="listeners(navigate)"
    >
      <slot name="default" />
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

    external: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    getHref (href) {
      if (this.external) {
        return href.replace(/^\//, '');
      }
      return href;
    },

    listeners (navigate) {
      return Object.assign({}, this.$listeners, { click: navigate, 'keypress.enter': navigate });
    }
  }
};

</script>
