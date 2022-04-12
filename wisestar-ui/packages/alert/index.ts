import type { App } from 'vue'
import WAlert from './WAlert.vue'

WAlert.install = (app: App) => app.component('WAlert', WAlert)

export default WAlert
