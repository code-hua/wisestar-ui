import type { App } from 'vue';
import { version } from './package.json';
import WButton from './packages/button';
import WCard from './packages/card';
import WTag from './packages/tag';
import WLink from './packages/link';
import WInput from './packages/input';
import WBackTop from './packages/backtop';
import WTable from './packages/table';
import WText from './packages/text';
import WSwitch from './packages/switch';
import Message from './packages/message';
import WDialog from './packages/dialog'
import Notification from './packages/notification'
import WDivider from './packages/divider'
import WImage from './packages/image'
import WAlert from './packages/alert'
import WDrawer from './packages/drawer'
import WMenu from './packages/menu'
import WMenuItem from './packages/menu-item'
import WDoPage from './packages/do-page'
import WDoPageItem from './packages/do-page-item'


const components: object[] = [
    WButton,
    WCard,
    WTag,
    WLink,
    WInput,
    WBackTop,
    WTable,
    WText,
    WSwitch,
    WDialog,
    WDivider,
    WImage,
    WAlert,
    WDrawer,
    WMenu,
    WMenuItem,
    WDoPage,
    WDoPageItem,
]

const install = (app: App) => {
    components.forEach((component:any) => app.use(component))
}

const wisestarUi: object = {
    version,
    install,
}

export {
    install,
    WButton,
    WCard,
    WTag,
    WLink,
    WInput,
    WBackTop,
    WTable,
    WText,
    WSwitch,
    WDialog,
    WDivider,
    WImage,
    WAlert,
    WDrawer,
    WMenu,
    WMenuItem,
    WDoPage,
    WDoPageItem,
    Message,
    Notification,
}

export default wisestarUi