<template>
  <div :class="isClass">
    <div class="w-alert-message">
      {{ message }}
    </div>
    <svg v-if="close" @click="onClose" class="w-icon w-ui-guanbi" t="1649162056630" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2206" width="13" height="13"><path d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z" p-id="2207"></path></svg>

  </div>
</template>

<script lang="ts" setup>
import { computed,PropType } from 'vue'
type Type = 'default' | 'primary' | 'success' | 'danger' | 'warning'

const props = defineProps(
  {
  type: {
    type: String as PropType<Type>,
    default: 'default',
    validator(v: string): boolean {
      return [
        'default',
        'primary',
        'success',
        'danger',
        'warning',
        ''
      ].includes(v)
    }
  },
  message: String,
  icon: String,
  close: Boolean,
  center: Boolean,
  simple: Boolean
}
)
const emit = defineEmits(['close'])

const isClass = computed((): (string | object)[] => {
  return [
    'w-alert',
    `w-alert-${props.type}`,
    {
      'w-alert-center': props.center,
      [`w-alert-sbdw-${props.type}`]: !props.simple
    }
  ]
})

const onClose = () => emit('close')
</script>
