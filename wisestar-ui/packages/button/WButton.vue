<template>
  <button :class="styleClass" :disabled="disabled">
    <span :style="[{ color: textStyle }]">
      <slot />
    </span>
  </button>
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
  round: Boolean,
  disabled: Boolean,
  icon: String,
  size: {
    type: String,
    validator (val:string) {
      return ['large', 'small', 'mini'].includes(val)
    }
  },
  square: Boolean,
  simple: Boolean
})

const { textStyle, styleClass } = _wButton()

interface themeType {
  [name: string]: string
}

function _wButton () {
  const COLOR: themeType = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#3f536e'
  }

  const textStyle = computed(() => {
    if (props.simple) return COLOR[props.type]
    return props.type === 'default' || props.type === '' ? '#333' : '#fff'
  })

  const styleClass = computed(() => {
    return [
      'w-button',
      props.simple
        ? props.disabled ? `w-button-simple-disabled-${props.type}` : `w-button-simple-${props.type}`
        : props.disabled ? `w-button-disabled-${props.type}` : `w-button-${props.type}`,
      props.size ? `w-button-size-${props.size}` : '',
      {
        'w-button-round': props.round,
        'w-button-square': props.square
      }
    ]
  })

  return { textStyle, styleClass }
}
</script>

