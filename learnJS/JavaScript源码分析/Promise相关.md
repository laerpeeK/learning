[][https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#%E4%BB%BB%E5%8A%A1_vs_%E5%BE%AE%E4%BB%BB%E5%8A%A1]

[在 JavaScript 中通过 queueMicrotask() 使用微任务][https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide#%E4%BB%BB%E5%8A%A1_vs_%E5%BE%AE%E4%BB%BB%E5%8A%A1]

一个 **微任务（microtask）**就是一个简短的函数，当创建该函数的函数执行之后，*并且* 只有当 Javascript 调用栈为空，而控制权尚未返还给被 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent) 用来驱动脚本执行环境的事件循环之前，该微任务才会被执行。