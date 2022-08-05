<template>
  <div class="t3-ce-text t3-ce-textpic mx-auto flex px-5  items-center justify-center flex-col  prose">
    <t3-ce-header v-bind="$props" />
    <t3-html-parser :content="bodytext" class="w-full mx-auto	"/>
  </div>
</template>
<script>
import T3CeText from 'nuxt-typo3/lib/components/T3CeText/T3CeText.vue'
export default {
  name: 'T3CeText',
  extends: T3CeText,
}
</script>
