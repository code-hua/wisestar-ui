<template>
  <span
    :style="[
      {
        color: color || COLOROBJECT[type],
        display: block ? 'block' : 'inline-block',
        fontSize: `${size}px`
      }
    ]"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
interface themeType {
  [name: string]: string
}

const COLOROBJECT:themeType = {
  primary: '#1890ff',
  success: '#18a058',
  danger: '#c42a35',
  warning: '#fcb040',
  default: '#3f536e'
}
defineProps({
  type: {
    type: String,
    default: 'default',
    validator (val:string) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
    }
  },
  size: {
    type: String,
    default: '16'
  },
  block: Boolean,
  color: String
})
</script>
