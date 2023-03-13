import axios from "axios"
import querystring from "querystring"
// 参考文档： https://www.kancloud.cn/yunye/axios/234845
const errorHandle = (status, info) => {
    switch(status) {
        case 400:
            console.log("语义错误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 500:
            console.log("服务器内部错误");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

const instance = axios.create({
    // 网络请求的公共配置
    timeout:5000
})

// 拦截器最常用

//发送数据之前
instance.interceptors.request.use(
    config =>{
        if(config.methods === "post") {
            config.data = querystring.stringify(config.data)
        }
        // 包含网络请求的所有信息
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)

//获取数据之前
instance.interceptors.response.use(
    response =>{
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error =>{
        const { response } = error;
        errorHandle(response.status, response.info)
    }
)

export default instance;