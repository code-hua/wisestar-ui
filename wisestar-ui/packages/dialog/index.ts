import type { App } from 'vue'
import WDialog from './WDialog.vue'

WDialog.install = (app: App) => app.component('WDialog', WDialog)

export default WDialog


