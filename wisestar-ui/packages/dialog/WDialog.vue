<template>
  <transition
    name="w-dialog"
    @after-enter="emit('onOpen')"
    @after-leave="emit('onClose')"
  >
    <div
      :class="['w-dialog-packing', { 'w-dialog-modal': modal }]"
      :style="{ zIndex }"
      v-show="modelValue"
      @click.self="packingClose"
    >
      <div class="w-dialog" :style="{ width, marginTop: top }">
        <div v-if="showHeader" class="w-dialog-header">
          <span v-if="$slots.title" class="w-dialog-title">
            <slot name="title" />
          </span>
          <span v-else class="w-dialog-title">{{ title }}</span>
          <svg v-if="showClose" @click.stop="close"  t="1649162056630" class="w-icon w-ui-close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2206" width="13" height="13"><path d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z" p-id="2207"></path></svg>
      
        </div>
        <div v-if="$slots.default" class="w-dialog-body"><slot /></div>
        <div v-if="$slots.footer" class="w-dialog-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { getCurrentInstance, watch, ComponentInternalInstance } from 'vue'
const props = defineProps(
  {
  modelValue: Boolean,
  width: {
    type: String,
    default: () => '30%'
  },
  top: {
    type: String,
    default: () => '15vh'
  },
  title: String,
  appendToBody: Boolean,
  modal: {
    type: Boolean,
    default: () => true
  },
  modalClose: {
    type: Boolean,
    default: () => true
  },
  showClose: {
    type: Boolean,
    default: () => true
  },
  showHeader: {
    type: Boolean,
    default: () => true
  },
  zIndex: {
    type: Number,
    default: () => 3500
  }
}
)
const emit = defineEmits([
  'update:modelValue',
  'open',
  'close',
  'onOpen',
  'onClose'
])
const { close, packingClose } = wDialog()
function wDialog() {
  const close = (): void => {
    emit('close')
    emit('update:modelValue', false)
  }

  const packingClose = (): void => {
    if (!props.modalClose) return
    close()
  }

  const self = getCurrentInstance() as ComponentInternalInstance
  watch(
    () => props.modelValue,
    (v: boolean): void => {
      if (v) emit('open')
      const el = self.proxy?.$el 
      if (v && props.appendToBody) {
        document.body.appendChild(el)
      }
    }
  )

  return { close, packingClose }
}
</script>

