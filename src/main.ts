import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'

const app = createApp(App)

app.use(Vant)
app.use(ElementPlus, { locale })
app.use(router)
app.mount('#app')
