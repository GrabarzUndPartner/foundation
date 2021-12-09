<template>
  <base-dialog v-bind="$attrs" :prevent-default-opener="true" v-on="$listeners" @open="onOpen">
    <template #default="{content, dialogName}">
      <slot name="link" :dialogName="dialogName" :deep="deep">
        <link-modal :dialog-name="dialogName" :deep="deep">
          Close
        </link-modal>
      </slot>
      <slot name="default" :content="content">
        {{ content }}
      </slot>
    </template>
  </base-dialog>
</template>

<script>
import Deep from '../../../Link/classes/Deep';
import LinkModal from '../../../Link/mutation/Modal';
import BaseDialog from '../index';

export default {
  components: {
    BaseDialog,
    LinkModal
  },

  data () {
    return {
      deep: new Deep(this.$attrs.name)
    };
  },

  methods: {
    onOpen (value) {
      console.log('test');
      if (value) {
        this.$el?.showModal();
      } else if (this.$el.close) {
        this.$el?.close();
      }
    }
  }
};
</script>

<style>

</style>
