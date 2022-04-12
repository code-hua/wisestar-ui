<template>
  <div v-if="isShow" class="w-message">
    <span
      :class="[
        'w-message-body',
        type ? `w-message-body--${type}` : 'w-message-body--'
      ]"
    >
      <span class="w-message-message">
        {{ message }}
      </span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance,ComponentInternalInstance, ref, PropType,computed } from 'vue'
type Type = 'primary' | 'success' | 'danger' | 'warning' | 'default'

const props = defineProps({
  message: String,
  type: {
    type: String as PropType<Type>,
    default: () => 'default',
    validator(v: string): boolean {
      return [
        'primary',
        'success',
        'danger',
        'warning',
        'default',
        ''
      ].includes(v)
    }
  },
  showClose: Boolean,
  time: {
    type: Number,
    default: () => 200
  },
  offset: {
    type: Number,
    default: () => 20
  },
  round: Boolean
})
const { isShow, leave, close, isClass } = wMessage()

function wMessage() {
  const isShow = ref<boolean>(true)
  let timer: any
  ;(function (): void {
    if (props.time > 0) {
      timer = setTimeout(() => {
        close()
      }, props.time)
    }
  })()

  const close = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const instance = getCurrentInstance() as ComponentInternalInstance
  const leave = (): void => {
    instance?.vnode?.el?.parentElement?.removeChild(instance.vnode.el)
  }

  const isClass = computed((): (string | object)[] => {
    return [
      'w-message',
      `w-message-${props.type}`,
      { 'w-message-round': props.round }
    ]
  })

  return { isShow, leave, close, isClass }
}
</script>

