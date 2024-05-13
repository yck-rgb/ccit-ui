import Button from "./button"
import Input from "./input"
import Alert from "./alert/index"
import FlowChart from "./flow-chart"
import Table from "./table"
import UploadFile from "./upload-file"
const version = require("../package.json").version

const components = [
    Button,
    Input,
    FlowChart,
    Table,
    UploadFile
]


const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })

    Vue.prototype.$alert = Alert
}

/**istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version,
    install,
    ...components,
}

export {
    version,
    Button,
    Input,
    Alert,
}