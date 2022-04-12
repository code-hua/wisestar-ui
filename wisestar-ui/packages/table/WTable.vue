<template>
  <div class="w-table" :style="[{ height }]">
    <table
      class="w-table-table"
      border="0"
      cellspacing="0"
      cellpadding="0"
      :width="width"
    >
      <thead class="w-thead">
        <tr class="w-thead-th" :height="trHeight">
          <th v-if="num" :class="isTdth('thead')" :align="align" />
          <th
            v-for="(item, i) in columns"
            :class="isTdth('thead')"
            :width="item.width"
            :key="i"
            :align="align"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>

      <tbody class="w-tbody">
        <tr
          v-for="(dataItem, ind) in data"
          :class="[
            'w-tbody-tr',
            {
              'w-tbody-tr-zebra': zebra,
            },
          ]"
          :height="trHeight"
          :key="ind"
        >
          <td v-if="num" :class="isTdth('tbody')" :align="align">
            {{ ind + 1 }}
          </td>
          <td
            v-for="(colItem, index) in columns"
            :class="isTdth('tbody')"
            :key="index"
            :align="align"
          >
            {{ dataItem[colItem.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  columns: {
    type: Array,
    default: []
  },
  trHeight: {
    type: String,
    default: '40px'
  },
  align: {
    type: String,
    default: 'left',
    validator (val) {
      return ['left', 'right', 'center'].includes(val)
    }
  },
  zebra: Boolean,
  border: Boolean,
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  },
  num: Boolean,
  important: {
    type: Array,
    default: []
  }
})
const isTdth = key => {
  return [
    `w-${key}-td`,
    {
      'w-table-border': props.border
    }
  ]
}
</script>

