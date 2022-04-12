import type { App } from 'vue'
import WMenuItem from './WMenuItem.vue'

WMenuItem.install = (app: App) => app.component('WMenuItem', WMenuItem)

export default WMenuItem