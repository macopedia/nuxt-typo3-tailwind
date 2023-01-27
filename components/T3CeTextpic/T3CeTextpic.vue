<template>
  <!--  appearance hero layout -->

  <div
    v-if="layout === 'hero'"
    class="t3-ce-textpic mx-auto flex items-center justify-center flex-col"
  >
    <t3-media-gallery
      v-if="gallery"
      class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      :gallery="gallery"
      :enlarge-image-on-click="enlargeImageOnClick"
    >
    </t3-media-gallery>
    <div class="text-center lg:w-2/3 w-full prose">
      <t3-ce-header v-bind="$props" class="" />
      <t3-html-parser class="mb-8 leading-relaxed" :content="bodytext" />
    </div>
  </div>

  <!--  appearance default layout -->
  <div
    v-else-if="layout === 'default'"
    class="t3-ce-textpic mx-auto flex md:flex-row flex-col items-center"
  >
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <t3-media-gallery
        class="object-cover object-center rounded"
        :gallery="gallery"
        :enlarge-image-on-click="enlargeImageOnClick"
      >
      </t3-media-gallery>
    </div>
    <div
      class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center prose"
    >
      <t3-ce-header class=" " v-bind="$props" />
      <t3-html-parser class="mb-8 leading-relaxed" :content="bodytext" />
    </div>
  </div>
  <!--  appearance layout-1 layout -->
  <div
    v-else-if="layout === 'layout-1'"
    class="t3-ce-textpic mx-auto flex md:flex-row flex-col items-center"
  >
    <div
      class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center prose"
    >
      <t3-ce-header class="" v-bind="$props" />
      <t3-html-parser class="mb-8 leading-relaxed" :content="bodytext" />
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <t3-media-gallery
        class="object-cover object-center rounded"
        :gallery="gallery"
        :enlarge-image-on-click="enlargeImageOnClick"
      >
      </t3-media-gallery>
    </div>
  </div>
</template>
<script>
import T3CeTextpic from 'nuxt-typo3/lib/components/T3CeTextpic/T3CeTextpic.vue'
export default {
  extends: T3CeTextpic,
  props: {
    appearance: {
      type: Object,
      default: 'default',
    },
    gallery: {
      type: Object,
      required: true,
    },
  },
  computed: {
    layout() {
      return this?.appearance?.layout || ''
    },
  },
}
</script>
