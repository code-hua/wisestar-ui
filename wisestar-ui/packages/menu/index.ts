import type { App } from 'vue'
import WMenu from './WMenu.vue'

WMenu.install = (app: App) => app.component('WMenu', WMenu)

export default WMenu