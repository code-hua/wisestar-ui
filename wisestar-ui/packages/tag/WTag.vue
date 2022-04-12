<template>
  <span
    :class="styleClass"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (val:string) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
    }
  },
  size: {
    type: String,
    validator (val:string) {
      return ['small', 'mini'].includes(val)
    }
  },
  round: Boolean,
  isClose: Boolean
})
const styleClass = computed(() => {
  return [
    'w-tag',
    `w-tag-${props.type}`,
    props.size ? `w-tag-${props.size}` : '',
    {
      'w-tag-round': props.round
    }
  ]
})
</script>
