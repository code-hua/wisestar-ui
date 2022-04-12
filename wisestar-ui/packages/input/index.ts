import type { App } from 'vue'
import WInput from './WInput.vue'

WInput.install = (app: App) => app.component('WInput', WInput)

export default WInput