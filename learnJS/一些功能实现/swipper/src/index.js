import ('./index.css')
import Swiper from '../src/swiper'
import i from '../img/i.jpg'
import o from '../img/o.jpg'
import q from '../img/q.jpeg'
import w from '../img/w.jpg'
import z from '../img/z.png'




//图片数组
let imgArr = [
    {
        url: '#',
        imgPath: i
    },
    {
        url: '#',
        imgPath: o
    },
    {
        url: '#',
        imgPath: q
    },
    {
        url: '#',
        imgPath: w
    },
    {
        url: '#',
        imgPath: z
    }
]

new Swiper({
    imgArr: imgArr, //图片数组
    aniTime: 1000, //动画执行时间
    intervalTime: 1000, //图片停留时间
    autoplay: true //是否自动播放
}).init()
