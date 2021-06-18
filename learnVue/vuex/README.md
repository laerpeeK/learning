通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。

Vuex 的状态存储是响应式的。

改变 store 中的状态的唯一途径就是显式地**提交 (commit) mutation**。

我们通过提交 mutation 的方式，而非直接改变 `store.state.count`，是因为我们想要更明确地追踪到状态的变化

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。



getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

Getter 会暴露为 `store.getters` 对象，你可以以属性的形式访问这些值

Getter 也可以接受其他 getter 作为第二个参数

getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的

你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。

每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数。

”要唤醒一个 mutation handler，你需要以相应的 type 调用 **store.commit** 方法：

你可以向 `store.commit` 传入额外的参数，即 mutation 的 *载荷（payload）*

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。

因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。



- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

Action: 处理异步操作。

Action 通过 `store.dispatch` 方法触发

一个 `store.dispatch` 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。





