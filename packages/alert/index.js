import Alert from "./alert.vue"
import Vue from "vue"

function AlertFn(text) {
    const ConstructorAlert = Vue.extend(Alert)
    const install = new ConstructorAlert({
        data: {
            text,
        },
    }).$mount()
    document.body.appendChild(install.$el)
}
export default AlertFn