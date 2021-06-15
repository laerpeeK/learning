import '../style/index.css';
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
console.log(mul(2, 2));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5));
/*
1.eslint不认识window, navigator全局变量
解决： 需要修改package.json中eslintConfig配置
2. sw代码必须运行在服务器上
   --> nodejs
   -->
      npm i serve -g
      serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露
 */
// 注册serviceworker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        // eslint-disable-next-line
        console.log('service-worker register success!');
      })
      .catch(() => {
        // eslint-disable-next-line
        console.log('service-worker register failed!');
      });
  });
}
