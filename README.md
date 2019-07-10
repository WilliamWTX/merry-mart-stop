## 项目名称：merry-mart-stop(美廉美网上商城)
## 为什么要用`React Hook`?
    使用React全家桶已经很长时间了，之前写React组件都是通过定义Class类的形式，在类里写React的生命周期和一些事件回调等，在我看到可以使用React的新特性使用Hook可以不使用Class的情况下使用React的state等其他的属性，在此项目中会用很多的`React`的一些Hook以及自定义的Hook和其他的一些钩子函数等，可以避免代码的重复，并且还能提高代码的整洁度。
## 网页样式书写：
    采用样式预编译语言 scss, 便于好管理，可以样式服用，书写公共的属性， 变量和混合等
## 版本记录更新：
### 2019-07-01：
    初始化项目，完成登录和注册的功能
### 2019-07-02：
    完成登录和注册的功能
### 2019-07-05：
    完成登录页面和自定义数字键盘
### 2019-07-07：
    1.开发中英文输入键盘
    
    2.完成使用账号密码登录
    
    3.登录方式的切换
### 2019-07-08：
    1.注冊頁面
### 2019-07-10：
    1.图片轮换
## 前端技术栈：
- create-react-app
- React v16.8.6
- antd v3.20.0
- redux react-redux redux-thunk
- react-react-dom
- node-fetch
- eslint
- SCSS
## 后端技术栈：(后期NODEJS或者PHP选一)；
- 需要等待 先开发前端页面。。。
## 预计实现功能：
- [x] 登录、注册
- [x] 商城首页
- [x] 购物车
- [x] 个人中心
- [x] 搜索
- [x] 详情
- [x] 订单
- [x] 持续增加。。。

## 项目描述：
    在原有的create-react-app上，使用antd上提供的react-app-rewired， 在没有 eject的情况下自定义配置 create-react-app
[create-react-app](https://www.github.com/facebook/create-react-app)

## 项目启动
### npm配置 因为npm默认镜像源是npm.org, 由于国内网络问题，安装超时或者安装失败，
在下载`node-sass`一般都不会成功，所以我们先改变npm的镜像源
- 特别注意 我强烈建议不要使用cnpm, 这个会安装一些乱七八糟的依赖等！！！！！！
```bash

因为我在项目中开启了eslint 换行符为LF 我们克隆代码前需要首先全局设置换行符后再克隆项目，否则不会编译通过

git config --global core.autocrlf input

git clone git@github.com:WilliamWTX/merry-mart-stop.git

cd merry-mart-stop

npm i

npm start

打包压缩：npm run build

```

- 为了避免在项目过程中样式类的覆盖，启动css module, 通过 import Styles from path 的
方式引入，相当于 Vue中的scope的作用一样，如果想用全局的scss 则文件使用.module.scss

- 后续开发中，在项目组件引入中，会使用lazyLoad

- 在此项目中， 最常见的感念：无状态组件， 完全受控组件，非受控组件

PS : 有看我到项目的小伙伴可以给个 star ~~~ 或者 fork 下来看看哦。如果有什么建议，也可以提 issue 哦
    




