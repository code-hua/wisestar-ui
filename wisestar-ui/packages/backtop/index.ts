import type { App } from 'vue';
import WBackTop from './WBackTop.vue'

WBackTop.install = (app: App) => app.component('WBackTop', WBackTop)

export default WBackTop
