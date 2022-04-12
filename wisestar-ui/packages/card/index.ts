import type { App } from 'vue';
import WCard from './WCard.vue'

WCard.install = (app: App) => app.component('WCard', WCard)

export default WCard