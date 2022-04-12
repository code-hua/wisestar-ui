
<template>
  <div class="w-input" :class="{ 'w-input-disabled': disabled }">
    <input
      :class="styleClass"
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="max"
      :disabled="disabled"
      :autofocus="autofocus"
      :name="name"
      @input="input"
      @keyup.enter="emit('enter')"
      @blur="emit('onblur')"
      @focus="emit('onfocus')"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator (val:string) {
      return ['text', 'password'].includes(val)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator (val:string) {
      return ['large', 'medium', 'small', 'mini'].includes(val)
    }
  },
  max: Number,
  clear: Boolean,
  disabled: Boolean,
  autofocus: Boolean,
  name: String,
  showPassword: Boolean
})
const emit = defineEmits(['update:modelValue', 'update:modelValue', 'clear', 'enter', 'onblur', 'onfocus'])

const {
  input,
  clearText,
  styleClass,
  inputType,
  isPass,
  showPasswordFn
} = _wInput()

function _wInput () {
  const input = (envt: any) => {
    emit('update:modelValue', envt.target.value)
  }
  const clearText = () => {
    if (props.disabled) return
    emit('update:modelValue', '')
    emit('clear')
  }
  const styleClass = computed(() => {
    return [
      'w-input-input',
      `w-input-input-${props.size}`,
      {
        'w-input-clear-padding': props.clear,
        'w-input-disabled': props.disabled
      }
    ]
  })
  const inputType = ref(props.type)
  const isPass = ref(false)
  const showPasswordFn = () => {
    isPass.value = !isPass.value
    isPass.value ? inputType.value = 'text' : inputType.value = 'password'
  }

  return {
    input,
    clearText,
    styleClass,
    inputType,
    isPass,
    showPasswordFn
  }
}

</script>

