<template>
  <div class="w-divider" :style="{ margin: `${margin} 0` }">
    <span
      :class="['w-divider-text', `w-divider-text-${position}`]"
      :style="{ color }"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

type Position = 'left' | 'center' | 'right'
defineProps(
  {
  position: {
    type: String as PropType<Position>,
    default: 'left',
    validator(v: string): boolean {
      return ['left', 'center', 'right', ''].includes(v)
    }
  },
  color: {
    type: String,
    default: () => '#515a6e'
  },
  margin: {
    type: String,
    default: () => '25px'
  }
}
);
</script>
