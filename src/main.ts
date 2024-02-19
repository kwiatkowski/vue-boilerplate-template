import { createApp } from "vue"
import App from "~/App.vue"

// general setup
import store from '~/setup/setup-store'
// import setupBasic from '~/setup/setup-basic'
import setupAxios from '~/setup/setup-axios'

// app store
// import StoreChart from '~/store/Chart/list.js'

// app register store module
// store.registerModule('chart', StoreChart)

const app = createApp(App)

app.use(store)

// setupBasic(app)
setupAxios(app)

app.mount("#app")