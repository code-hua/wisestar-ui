import type { App } from 'vue'
import WTable from './WTable.vue'

WTable.install = (app: App) => app.component('WTable', WTable)

export default WTable