import type { App } from 'vue';
import Message from './src/message'

(Message as any).install = function (app: App):void{

}

export {
    Message
}

export default Message;