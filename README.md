# online_education_platform_front

> A Vue.js project

## Build Setup

1. 搭建node环境
2. 修改vue的api请求接口地址，`sed -i 's/127.0.0.1/服务器ip/g' /opt/OnlineEducationPlatform/online_education_platform_front/src/restful/api.js`
3. 打包
    1. npm install 
    2. npm run build
4. 配置nginx，结合vue的静态文件
    1. `vim /etc/nginx/nginx.conf`
    2. ```
       http {
            server {
                     listen       80 default_server;
                     listen       [::]:80 default_server;
                     location / {
                        root         /opt/OnlineEducationPlatform/online_education_platform_front/dist;
                       try_files $uri $uri/ /index.html;  # 防止404页面
                    }
            }
       }
       ```

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
