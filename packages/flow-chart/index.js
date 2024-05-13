import flowChart from "./flow-chart.vue"

flowChart.install = (Vue) => {
    Vue.component(flowChart.name, flowChart)
}

export default flowChart