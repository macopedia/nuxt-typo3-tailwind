<template>
  <ValidationObserver
    v-slot="validator"
    ref="validator"
    slim
  >
    <form
      ref="form"
      class="t3-form "
      novalidate
      @submit.prevent="onSubmit"
      @reset="resetForm"
    >
      <slot
        name="before"
        :model="model"
        :validator="validator"
        :state="state"
      />
      <slot name="fields">
        <T3FormFieldList
          ref="fieldlist"
          v-model="model"
          :elements="elements"
          :components="components"
          :classes="classes"
          :i18n="i18n"
        />
      </slot>

      <slot name="cta">
        <T3FormCta
          :state="state"
          :i18n="i18n"
        />
      </slot>

      <slot
        name="after"
        :model="model"
        :validator="validator"
        :state="state"
      />
    </form>
  </ValidationObserver>
</template>
<script>

import T3Form from 'nuxt-typo3/lib/components/T3Form/T3Form.vue'

export default {
  name: 'T3Form',
  extends: T3Form,
}
</script>
