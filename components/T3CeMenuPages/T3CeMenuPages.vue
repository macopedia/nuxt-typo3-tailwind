<template>
  <div class="t3-ce-menu px-5 py-24 mx-auto">
    <t3-ce-header v-bind="$props" class="text-center mb-20 mx-auto" />

    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" v-if="menu">
      <div
        class="p-2 sm:w-1/2 w-full"
        v-for="(menuItem, key) in menu"
        :key="key"
      >
        <div
          class="bg-gray-100 rounded flex p-4 h-full items-center justify-center"
        >
          <t3-nav-link
            :to="menuItem.link"
            :target="menuItem.target || false"
            :title="menuItem.title"
            class="title-font font-medium"
          >
            {{ menuItem.title }}
          </t3-nav-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import T3CeMenuPages from 'nuxt-typo3/lib/components/T3CeMenuPages/T3CeMenuPages.vue'
// import T3CeMenuPagesList from 'nuxt-typo3/lib/components/T3CeMenuPages/T3CeMenuPagesList.vue'
export default {
  name: 'T3CeMenuPages',
  extends: T3CeMenuPages,
  // components: {
  //   T3CeMenuPagesList
  // },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
}
</script>
