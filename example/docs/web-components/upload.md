---
title: 上传
---


### Upload上传

通过点击或者拖拽上传文件



#### 点击上传

<cc-upload-file :limit="3" action="http://localhost:3000/api/upload"  :on-success="uploadSuccess" :before-upload="beforeUpload">

​		<cc-button type="success">点击上传</cc-button>

</cc-upload-file>

<script>
    export default {
        data(){
            return {
            }
		},
        methods:{
            uploadSuccess(fileList) {
                console.log(fileList)
            },
            beforeUpload(file) {
                //多张需要遍历，在此只展示单图上传
                const isJpg = file.type === 'image/jpeg'
                const isLt1M = file.size/1024/1024 < 1
                console.log(isJpg, isLt1M)
                return isJpg && isLt1M
            }
        },
	}
</script>



```vue
<cc-upload-file
	action="http://localhost:3000/api/upload"
    :limit="3"
    :on-success="uploadSuccess" 
    :before-upload="beforeUpload"           
>
 	<cc-button>点击上传</cc-button>
</cc-upload-file>
<script>
	export default {
        methods: {
            uploadSuccess(fileList) {
                console.log(fileList)
            },
            beforeUpload(file) {
                //多张需要遍历，在此只展示单图上传
                const isJpg = file.type === 'image/jpeg'
                const isLt1M = file.size/1024/1024 < 1
                return isJpg && isLt1M
            }
        }
    }
</script>
```



#### 配置

| 参数          | 说明                                                     | 类型           | 可选值 | 默认值 |
| ------------- | -------------------------------------------------------- | -------------- | ------ | ------ |
| action        | 必须参数，上传地址                                       | String         | ——     | ——     |
| multiple      | 是否支持多文件上传                                       | Boolean        | ——     | ——     |
| limit         | 最多上传文件数目限制                                     | Number         | ——     | ——     |
| on-success    | 文件上传成功时的钩子                                     | function(file) | ——     | ——     |
| on-error      | 文件上传失败时的钩子                                     | function(file) | ——     | ——     |
| before-upload | 文件上传之前的钩子                                       | function(file) | ——     | ——     |
| on-progress   | 文件上传时的钩子                                         | function(file) | ——     | ——     |
| http-request  | 自定义上传钩子,参数为上传的文件，若返回为false则停止上传 | function       | ——     | ——     |

