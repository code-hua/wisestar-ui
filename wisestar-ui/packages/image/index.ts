import type { App } from 'vue'
import WImage from './WImage.vue'

WImage.install = (app: App) => app.component('WImage', WImage)

export default WImage