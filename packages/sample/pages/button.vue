
<template>
  <div>
    <fieldset>
      <legend>Base button</legend>
      <form>
        <core-button-base label="BaseButton" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Default button disabled</legend>
      <form>
        <core-button-default label="Disabled" :disabled="true" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample button</legend>
      <form>
        <sample-button label="Label" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample button disabled</legend>
      <form>
        <sample-button label="Disabled" disabled />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample button loading</legend>
      <form>
        <sample-button label="Loading…" loading />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample file button </legend>
      <form>
        <sample-button-file label="File Upload" />
      </form>
    </fieldset>
    <fieldset>
      <legend>Sample modal button </legend>
      <form>
        <base-dialog :name="dialogName" />
        <sample-button-modal :deep="dialogDeep" label="Modal" content="Dialog Content" />
      </form>
    </fieldset>
  </div>
</template>

<script>

import BaseDialog from '@foundation/core/Dialog';
import Deep from '@foundation/core/Button/classes/Deep';

import CoreButtonBase from '@foundation/core/Button';
import CoreButtonDefault from '@foundation/core/Button/default';

import SampleButton from '@/components/atoms/Button';
import SampleButtonFile from '@/components/atoms/button/File';
import SampleButtonModal from '@/components/atoms/button/Modal';

export default {
  components: {
    BaseDialog,
    CoreButtonBase,
    CoreButtonDefault,
    SampleButton,
    SampleButtonFile,
    SampleButtonModal
  },
  data () {
    const dialogName = 'default';
    return {
      dialogName,
      dialogDeep: new Deep(dialogName, true),
      iconButton: {
        iconName: 'check',
        label: 'IconButton'
      }
    };
  }
};

</script>
