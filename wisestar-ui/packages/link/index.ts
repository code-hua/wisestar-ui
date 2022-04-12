import type { App } from 'vue'
import WLink from './WLink.vue'

WLink.install = (app: App) => app.component('WLink', WLink)

export default WLink