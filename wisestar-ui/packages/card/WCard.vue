<template>
  <div :class="['w-card', shadow ? `w-card-shadow-${shadow}` : '']">
    <div v-if="!simple" class="w-card-header">
      <p class="w-card-title">
        <slot name="maintitle" />
      </p>
      <p class="w-card-subtitle">
        <slot name="subtitle" />
      </p>
    </div>

    <div class="w-card-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  shadow: {
    type: String,
    validator (val:string) {
      return ['always', 'hover', 'noShadow'].includes(val)
    }
  },
  simple: Boolean
})
</script>

