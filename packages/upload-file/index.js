import uploadFile from "./upload-file.vue"

uploadFile.install = (Vue) => {
    Vue.component(uploadFile.name, uploadFile)
}

export default uploadFile