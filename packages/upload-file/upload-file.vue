<template>
  <div @click="upload">
    <input type="file" 
      style="display: none" 
      ref="fileElem" 
      :multiple="multiple"
      @change="getFile($event)">
    <slot />
  </div>
</template>
<script>
import fetch from "./fetch"
function noop() {}
export default {
  name: "cc-upload-file",
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 1
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    beforeUpload: Function,
    onProgress: {
      type: Function,
      default: noop
    },
    onChange: {
      type: Function,
      default: noop
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    upload() {
      // @ts-ignore
      this.$refs.fileElem.dispatchEvent(new MouseEvent('click'))
    },
    getFile(e) {
      const files = e.target.files;
      var form = new FormData()
      if(files.length > this.limit) {
        alert(`当前限制选择个${this.limit}`)
        return false
      }
      let beforeData
      if(!this.multiple) {
        beforeData = {
          size: files[0].size,
          type: files[0].type,
          name: files[0].name
        }
      }else {
        beforeData = []
      }
      for(let i = 0; i < files.length; i++) {
        form.append('files', files[i])
        if(this.multiple) {
          // @ts-ignore
          beforeData.push({
            size: files[i].size,
            type: files[i].type,
            name: files[i].name
          })
        }
      }
      // @ts-ignore
      const before = this.beforeUpload ? this.beforeUpload(beforeData) : true
      if(!before) {
        return false
      }
      // @ts-ignore
      fetch(this.action, form, (res) => {
        // @ts-ignore
        this.onProgress(res)
      }).then(res => {
        // @ts-ignore
        // @ts-ignore
        
        this.onChange(res.fileList)
        let data
        data = res
        // @ts-ignore
        this.onSuccess(data)
      }).catch(res => {
        // @ts-ignore
        this.onError(res)
      })
    },

  }
}
</script>