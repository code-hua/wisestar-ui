import type { App } from 'vue'
import WSwitch from './WSwitch.vue'

WSwitch.install = (app: App) => app.component('WSwitch', WSwitch)

export default WSwitch