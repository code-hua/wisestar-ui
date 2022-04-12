import { render, h } from "vue";
import WMessage from './WMessage.vue'

const createNotdes: Function = (mesComponent: object, options: object): object => {
    const instance: any = createComponent(mesComponent, options)
    document.body.append(instance.vnode.el)
    return instance.proxy
}

const createComponent: Function = (mesComponent: object, props: object): object => {
    const node: any = h(mesComponent, props)
    const container: HTMLDivElement = document.createElement('div')
    render(node, container)
    return node.component
}


const messageTime: object = { time: 2000, offset: 20 }
const Message: Function = (options: object): void => {
    return createNotdes(WMessage, {...messageTime, ...options})
}
export default Message;