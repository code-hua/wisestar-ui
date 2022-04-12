<template>
  <div :class="isClass">
    <div v-if="$slots.left" :class="['w-menu-left', isFlex]">
      <slot name="left" />
    </div>
    <div v-if="$slots.default" :class="['w-menu-default', isFlex]">
      <slot />
    </div>
    <div v-if="$slots.right" :class="['w-menu-right', isFlex]">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, PropType } from 'vue'
type Theme = 'dark' | 'light'
type Mode = 'horizontal' | 'vertical'
const props = defineProps(
  {
  theme: {
    type: String as PropType<Theme>,
    default: 'dark',
    validator(v: string): boolean {
      return ['dark', 'light', ''].includes(v)
    }
  },
  shadow: Boolean,
  mode: {
    type: String as PropType<Mode>,
    default: 'horizontal',
    validator(v: string): boolean {
      return ['horizontal', 'vertical', ''].includes(v)
    }
  }
}
)
provide('theme', props.theme)

const isFlex = computed(() => props.mode === 'horizontal' && 'w-menu-flex')

const isClass = computed(() => {
  return [
    'w-menu',
    isFlex.value,
    {
      'w-menu-shadow': props.shadow,
      [`w-menu-${props.theme}`]: props.theme
    }
  ]
})
</script>
