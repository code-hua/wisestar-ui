import { App } from 'vue'
import WDrawer from './WDrawer.vue'

WDrawer.install = (app: App) => app.component('WDrawer', WDrawer)

export default WDrawer