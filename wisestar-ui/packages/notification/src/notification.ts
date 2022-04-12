import { render, h } from "vue";
import WNotification from './WNotification.vue'

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


const notificationTime: object = { time: 3500, position: 'top-right', close: true }
const Notification: Function = (options: object): void => {
    return createNotdes(WNotification, {...notificationTime, ...options})
}
export default Notification;