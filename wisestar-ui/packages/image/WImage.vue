<template>
  <div class="w-image">
    <div class="w-image-error" v-if="isError">
      <slot name="error">
        <span class="w-image-error-text">加载失败</span>
      </slot>
    </div>
    <img
      v-else
      :isdrag="isdrag"
      :class="[{ 'w-image-select': select }]"
      :style="{ width, height }"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="emit('load')"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineProps(
  {
  src: String,
  alt: String,
  width: String,
  height: String,
  select: Boolean,
  isdrag: Boolean
}
)
const emit = defineEmits(['error', 'load'])

const isError = ref<boolean>(false)
const onError = (): void => {
  emit('error')
  isError.value = true
}
</script>

