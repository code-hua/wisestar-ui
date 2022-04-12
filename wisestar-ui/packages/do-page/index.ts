import { App } from 'vue'
import WDoPage from './WDoPage.vue'

WDoPage.install = (app: App) => app.component('WDoPage', WDoPage)

export default WDoPage