import { App } from 'vue'
import WButton from './WButton.vue'

WButton.install = (app: App) => app.component('WButton', WButton)

export default WButton