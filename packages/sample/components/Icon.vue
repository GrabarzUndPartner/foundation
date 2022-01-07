<template>
  <base-icon>
    <component :is="mappedIcon" />
  </base-icon>
</template>

<script>
import BaseIcon from '@foundation/core/Icon';

const ICONS = {
  loading: () => import('@/components/assets/loader/Loader'),
  upload: () => import('@/assets/svg/icons/upload.svg?vue-template')
};

export default {
  components: { BaseIcon },
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    mappedIcon () {
      return ICONS[String(this.icon)];
    }
  }

};
</script>
