<template>
<div class="container px-5 py-24 mx-auto">
  <T3Form 
    ref="form" class="lg:w-1/2 md:w-2/3 mx-auto"
    :elements="elements"
    @submit="onSubmit"
  >

    <template #after="{state}" class="flex flex-wrap -m-2">
      <p v-if="state.error || state.failture">
        {{ i18n.serverError }}
      </p>
      <p v-if="state.success">
        {{ i18n.serverSuccess }}
      </p>
    </template>
  </T3Form>
  </div>

</template>



<script>
import T3CeFormFormframework from 'nuxt-typo3/lib/components/T3CeFormFormframework/T3CeFormFormframework.vue'

export default {
  name: 'T3CeFormFormframework',
  extends: T3CeFormFormframework,
}
</script>
