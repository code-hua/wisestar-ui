import type { App } from 'vue'
import WTag from './WTag.vue'

WTag.install = (app: App) => app.component('WTag', WTag)

export default WTag