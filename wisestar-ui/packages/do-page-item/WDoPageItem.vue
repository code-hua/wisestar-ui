<template>
  <div class="w-do-page-item" :align="isCenter ? 'center' : direction">
    <div :class="[
      'w-do-page-item-link',
      { 'w-do-page-item-prohibit': prohibit }
    ]" @click="link">
      <svg v-if="direction === 'left'" t="1649687467177" style="vertical-align: middle;" viewBox="0 0 1024 1024"
        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2231" width="18" height="18">
        <path
          d="M512 877.737822 575.918775 813.819047 320.245721 558.145993 877.247658 558.145993 877.247658 466.834334 320.245721 466.834334 575.918775 211.161281 512 147.243529 146.753365 512.491187Z"
          p-id="2232"></path>
      </svg>
      <slot />
      <svg v-if="direction === 'right'" t="1649687553280" style="vertical-align: middle; " viewBox="0 0 1024 1024"
        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3041" width="18" height="18">
        <path
          d="M512.001023 147.243529 448.082248 211.161281 703.755302 466.834334 146.753365 466.834334 146.753365 558.145993 703.755302 558.145993 448.082248 813.819047 512.001023 877.737822 877.247658 512.491187Z"
          p-id="3042"></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, ComponentInternalInstance, PropType } from 'vue'
type Direction = 'left' | 'right'
const props = defineProps(
  {
    direction: {
      type: String as PropType<Direction>,
      required: true,
      validator(v: string): boolean {
        return ['left', 'right'].includes(v)
      }
    },
    url: String,
    icon: String,
    prohibit: Boolean
  }
)

const { isCenter, link } = wTurnPageItem()
function wTurnPageItem() {
  const isCenter = inject('is-center')
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  const link = (): void => {
    if (props.prohibit) return
    try {
      proxy?.$router.push((props as any).url)
    } catch (e: any) {
      console.log(e)
    }
  }
  return { isCenter, link }
}
</script>
