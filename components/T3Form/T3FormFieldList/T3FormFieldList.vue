<template>
  <div class="t3-form-fieldlist p-2 w-full">
    <div
      v-for="field in elements"
      :key="field.identifier"
      :class="[`t3-form-field-${field.identifier}`, getCssClass(field, classes)]" class="relative"
    >
      <component class="relative"
        :is="getComponentField(field)"
        v-model="model[field.name]"
        :field="field"
      >
        <T3FormFieldList
          v-if="field.fieldlist && field.elements && field.elements.length"
          ref="nested"
          :elements="field.elements"
          :components="components"
          :classes="classes"
          @input="updateModel"
        />
      </component>
    </div>
  </div>
</template>
<script>

import T3FormFieldList from 'nuxt-typo3/lib/components/T3Form/T3FormFieldList/T3FormFieldList.vue'

export default {
  name: 'T3FormFieldList',
  extends: T3FormFieldList

}

</script>
