---
title: 107-in
---

## 上海测试环境自动化部署

+ 使用说明:
	```
	通过下面SVN地址,拉取一个仓库在你本地,当你修改完毕后,在本地打包好之后,直接覆盖仓库里的内容并且提交,然后点击构建链接进行构建/查看构建状态
	
	107测试环境自动化部署系统地址:
	http://192.168.4.141:2122/
	用户: dev
	密码: 123456
	
	SVN公用地址:
	https://192.168.8.180/svn/shccit/java_automatic_deployment

	***为了保障服务器性能,请勿多次重复点击[立即构建]***
	```
### 公共服务-注册中心 eureka 
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_eureka_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/fdedaaa53ead472aac6c2d76b5cb3c43/9747c38fc4704ea9a0ba0b9032d127c1
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=fdedaaa53ead472aac6c2d76b5cb3c43&token=9747c38fc4704ea9a0ba0b9032d127c1
	  
### 公共服务-网关 gateway
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_gateway_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/a47c24eeede84356823754ae172dd884/bfd0cad0602e487ab9214aece070e9bb
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=a47c24eeede84356823754ae172dd884&token=bfd0cad0602e487ab9214aece070e9bb
	
### 智能生产系统-后端 mes
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_mes_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/bb785b100a0f428ea15273bd97e3478a/46142d9976354b279539e0e29d822132
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=bb785b100a0f428ea15273bd97e3478a&token=46142d9976354b279539e0e29d822132
	
### 智能生产系统-后端 ucenter
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_ucenter_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/523b14d5b26d48709064329afe7ec30a/0cc0c5f0d7094a118d951ac75c043883
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=523b14d5b26d48709064329afe7ec30a&token=0cc0c5f0d7094a118d951ac75c043883
	
### 智能生产系统-后端 cost
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_cost_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/77c48da46a674d2eb0606a394731bd0c/8f021eace3c349588f697d9e3b2594f3
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=77c48da46a674d2eb0606a394731bd0c&token=8f021eace3c349588f697d9e3b2594f3
	  	  
### 供应链-后端 scm
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_scm_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/e979eef2d10c49ba97f86f88d1bafbd1/8c1253b4524f41a28601c6047553617e
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=e979eef2d10c49ba97f86f88d1bafbd1&token=8c1253b4524f41a28601c6047553617e
	  	  
### crm
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_crm_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/1ea0ec15f9fe48f0979022731022c22f/b98847ba1b0140df8907a5a9a2032a4d
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=1ea0ec15f9fe48f0979022731022c22f&token=b98847ba1b0140df8907a5a9a2032a4d	  
	  
### 项目管理-后端 pms
+ SVN地址 : http://180.167.116.211:8443/svn/shccit/java_pms_deploy
+ 立即构建 : http://192.168.4.141:2122/api/build2/bd669f5076cc45fd9f2be4cd8fac5784/c8d9d1682a1f4449badbe656b1dc041d
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=bd669f5076cc45fd9f2be4cd8fac5784&token=c8d9d1682a1f4449badbe656b1dc041d
	  
### 官网-后端 gyyqjt-admin
+ 立即构建 : http://192.168.4.141:2122/api/build2/02ff72d8580e455c8eef6d7950cbf754/7106c05d803944cba348fc86a95fc92a
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=02ff72d8580e455c8eef6d7950cbf754&token=7106c05d803944cba348fc86a95fc92a

### 科创-bcc
+ 立即构建 : http://192.168.4.141:2122/api/build2/17bab0f1e96642f799ca16d2681f342b/144e071077b54f07aee06dfafb1393b6
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=17bab0f1e96642f799ca16d2681f342b&token=144e071077b54f07aee06dfafb1393b6

### 协同-cms
+ 立即构建 : http://192.168.4.141:2122/api/build2/b24b8f3ba542496dab88d8c932431fe6/d4a2a6ecc11840d6bbc47a938cefad13
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=b24b8f3ba542496dab88d8c932431fe6&token=d4a2a6ecc11840d6bbc47a938cefad13

### 文档-dms
+ 立即构建 : http://192.168.4.141:2122/api/build2/c40ac9a84a154839a5b32644810874ae/e9b288c5342942b082ac36d0d99e9975
+ 查询构建状态 : http://192.168.4.141:2122/api/build_status?id=c40ac9a84a154839a5b32644810874ae&token=e9b288c5342942b082ac36d0d99e9975
	  



