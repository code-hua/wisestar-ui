import type { App } from 'vue'
import WText from './WText.vue'

WText.install = (app: App) => app.component('WText', WText)

export default WText