import type { App } from 'vue'
import WDivider from './WDivider.vue'

WDivider.install = (app: App) => app.component('WDivider', WDivider)

export default WDivider