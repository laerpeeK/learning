Webpack4入门->精通（尚硅谷）

视频地址：https://www.bilibili.com/video/BV1e7411j7T5

本文件夹为视频涉及的代码部分，根据本人修改测试，2021-06-16可用。

可配合视频一同使用。

主要修改如下：

1. less文件的引入方式改为如下：require('!style-loader!css-loader!less-loader!./index.less')
2. devServer端口为8089
3. babel相关依赖包版本进行更换
4. PS：在引入相关依赖包时，有的包因为时间问题，可能是很久之前的版本，存在风险。可以根据实际的package-lock文件去查看，如果要投入实际生产使用，建议采用安全版本的依赖包。
5. 引入了express&jquery，全局有安装的同学不需要再添加这两个依赖
6. 生产环境配置时，corejs版本需要精确到具体版本号 ，（视频里为version:3  ,实际需要：version: 3.XX）
7. 相关文档请从评论区找，该文件夹不含说明文档/笔记。

