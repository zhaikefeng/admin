# admin
后台管理系统：
布局方式一般是 ： 100% + 栅格布局（是基于媒体查询）
0-980-1980-max
980称为最小尺寸  1980称为最大尺寸
0-980页面宽度 保持980不变 产生滚动条  >1980 页面保持1980 不变  两边有余白
最精细的有   0-780-1280-1680-1980-2440-max

项目搭建:
主程搭建架构
1.预处理语言  less sass stylus
  将config下webpack.config.js 里的sass全改成less
  记住react框架里不能预装less 
  所以需要提前安装好less  和less-loader
  样式冲突:
      1.通过BEM命名法  保证类名不重复 组件名-功能名-具体名称
      2.css in js  在js里面写css  不能使用预处理语言
      3.样式模块化  ?????
2.ui框架
    antd  在任何一个框架里面有全局加载和按需加载

    antd和less
    前期由于antd是基于less2版本2.7.3
    所以建议将less版本降至2.7.3
    按需引入:
        1.安装插件 npm install babel-plugins-import
        2.webpack.config.js  查找babel-loader   ['import',{"libraryName":"antd",style:true}] 
3.共有插件
    redux   
    router
    react-redux
    axios  拦截器
    react-loadable
4.页面文件目录
5.指定开发规范
6.公有的组件
7.公有的模块
