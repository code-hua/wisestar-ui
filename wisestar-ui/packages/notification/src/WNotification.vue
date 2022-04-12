<template>
  <transition name="w-notification-fade" @after-leave="lve" appear>
    <div
      v-show="isShow"
      :class="['w-notification', `w-notification-${position}`]"
    >
      <div class="w-notification-body">
        <svg v-if="type==='success'" :class="svgClass" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="38"><g stroke="none" fill="#18a058" stroke-width="1" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"></path></g></g></svg>
        <svg v-else-if="type==='warning'" :class="svgClass" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="38"><g stroke="none" fill="#f0a020" stroke-width="1" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"></path></g></g></svg>
        <svg v-else-if="type==='danger'" :class="svgClass" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="38"><g stroke="none" stroke-width="1" fill-rule="evenodd" fill="#d03050"><g fill-rule="nonzero"><path d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"></path></g></g></svg>
        <svg v-else-if="type==='primary'" :class="svgClass" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="38"><g stroke="none" stroke-width="1" fill-rule="evenodd" fill="#2080f0"><g fill-rule="nonzero"><path d="M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"></path></g></g></svg>
        <div class="w-notification-content">
          <h3 class="w-notification-title">{{ title }}</h3>
          <div class="w-notification-message">
            <p>{{ message }}</p>
          </div>
        </div>
        <svg v-if="close" @click="onClose"  t="1649162056630" class="w-ui-close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2206" width="13" height="13"><path d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z" p-id="2207"></path></svg>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {
  getCurrentInstance,
  ref,
  computed,
  ComponentInternalInstance,
  PropType
} from 'vue'
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type Type = 'primary' | 'success' | 'danger' | 'warning'
const props = defineProps(
  {
  title: String,
  message: String,
  time: {
    type: Number,
    default: () => 3500
  },
  position: {
    type: String as PropType<Position>,
    default: () => 'top-right',
    validator(v: string): boolean {
      return [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        ''
      ].includes(v)
    }
  },
  close: Boolean,
  type: {
    type: String as PropType<Type>,
    validator(v: string): boolean {
      return ['primary', 'success', 'danger', 'warning', ''].includes(v)
    }
  }
}
)
const { isShow, onClose, lve, svgClass } = wNotification()

function wNotification() {
  const isShow = ref<boolean>(true)
  let timer: any
  ;(function (): void {
    if (props.time > 0) {
      timer = setTimeout(() => {
        onClose()
      }, props.time)
    }
  })()

  const onClose = (): void => {
    clearTimeout(timer)
    isShow.value = false
  }

  const svgClass = computed((): string[] => {    
    return [
      'w-notification-icon',
      `w-notification-icon-${props.type}`
    ]
  })

  const instance = getCurrentInstance() as ComponentInternalInstance
  const lve = (): void => {
    instance.vnode?.el?.parentElement?.removeChild(instance.vnode.el)
  }

  return { isShow, onClose, lve, svgClass }
}
</script>

