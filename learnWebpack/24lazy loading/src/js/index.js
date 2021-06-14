
// eslint-disable-next-line
console.log('index')


document.getElementById('btn').onclick = function() {
    //懒加载 当文件需要使用时，才加载
    //预加载 webpackPrefetch: true 会将js文件提前加载，未使用
    //正常加载可以认为是并行加载（同一时间加载多个文件） 预加载可以认为是等其他资源加载完毕，浏览器空闲再偷偷加载资源
    import(/*webpackChunkName: 'test', webpackPrefetch: true*/'./test').then(({mul})=> {
        console.log(mul(4,5))
    })
}

