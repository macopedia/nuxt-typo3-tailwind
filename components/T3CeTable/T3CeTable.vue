<template>
  <div :class="`t3-ce-table--${tableClass}`" class="t3-ce-table prose">
    <t3-ce-header v-bind="$props" />
    <table>
      <caption v-if="tableCaption">
        {{
          tableCaption
        }}
      </caption>
      <thead v-if="thead">
        <tr>
          <th v-for="(col, colKey) in thead" :key="colKey">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody v-if="tbody">
        <tr v-for="(row, rowKey) in tbody" :key="rowKey">
          <td
            :is="tableHeaderPosition === 2 && colKey === 0 ? 'th' : 'td'"
            v-for="(col, colKey) in row"
            :key="colKey"
          >
            {{ col }}
          </td>
        </tr>
      </tbody>
      <tfoot v-if="tfoot">
        <tr>
          <td v-for="(col, colKey) in tfoot" :key="colKey">
            {{ col }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import T3CeTable from 'nuxt-typo3/lib/components/T3CeTable/T3CeTable.vue'
export default {
  name: 'T3CeTable',
  extends: T3CeTable,
}
</script>
