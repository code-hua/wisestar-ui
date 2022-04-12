import type { App } from 'vue';
import Notification from './src/notification'

(Notification as any).install = function (app: App):void{

}

export {
  Notification
}

export default Notification;