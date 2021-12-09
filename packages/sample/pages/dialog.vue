<template>
  <div>
    <fieldset>
      <legend>Dialog</legend>
      <base-dialog :name="dialogName" />
      <link-modal :deep="dialogDeep" content="Dialog Content">
        Open
      </link-modal>
    </fieldset>
    <fieldset>
      <legend>Menu Dialog</legend>
      <menu-dialog :name="menuDialogName">
        Menu Dialog
      </menu-dialog>
      <link-modal :deep="menuDeep" content="Menu Content">
        Open
      </link-modal>
    </fieldset>
  </div>
</template>

<script>
import BaseDialog from '@foundation/core/Dialog';
import Deep from '@foundation/core/Link/classes/Deep';
import LinkModal from '@foundation/core/Link/mutation/Modal';
import MenuDialog from '@foundation/core/Dialog/mutation/Menu';
export default {
  components: {
    BaseDialog,
    MenuDialog,
    LinkModal
  },
  data () {
    const dialogName = 'default';
    const menuDialogName = 'menu';
    return {
      dialogName,
      dialogDeep: new Deep(dialogName, true),
      menuDialogName,
      menuDeep: new Deep(menuDialogName, true)
    };
  }
};

</script>
