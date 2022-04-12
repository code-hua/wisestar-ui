<template>
  <div
    v-if="$slots.default"
    :class="['w-menu-item', { 'w-menu-item-prohibit': prohibit }]"
    :style="isStyleSet"
    @click="to && link()"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  getCurrentInstance,
  inject,
  computed,
  ComponentInternalInstance
} from 'vue'
const props = defineProps({
  to: String,
  prohibit: Boolean
})

const theme: string | undefined = inject('theme')

const isStyleSet = computed((): object[] => [
  { color: theme === 'dark' ? '#fff' : '#000' }
])

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const link = (): void => {
  if (props.prohibit) return
  try {
    proxy?.$router.push((props as any).to)
  } catch (e: any) {
    console.log(e)
  }
}
</script>
