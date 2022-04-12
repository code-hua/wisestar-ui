import { App } from 'vue'
import WDoPageItem from './WDoPageItem.vue'

WDoPageItem.install = (app: App) => app.component('WDoPageItem', WDoPageItem)

export default WDoPageItem