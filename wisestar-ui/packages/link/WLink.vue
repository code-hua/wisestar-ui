<template>
  <a
    :class="styleClass"
    :style="[{ textDecoration: underline ? 'none' : 'underline' }]"
    :href="isdisable ? 'javascript:void(0)' : url"
    :target="target"
  >
    <slot />
  </a>
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
  isdisable: Boolean,
  url: String,
  underline: {
    type: Boolean,
    default: true
  },
  target: String
})
const styleClass = computed(() => {
  return [
    'w-link',
    `w-link-${props.type}`,
    props.isdisable ? `w-link-isdisable-${props.type}` : ''
  ]
})
</script>

