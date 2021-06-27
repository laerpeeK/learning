import left from  '../img/left.png'
import right from '../img/right.png'
/*
 obj:
 imgArr 图片数组
 imgWidth 图片宽度
 aniTime 动画切换时间
 intervalTime 停留的时间
 scale 图片缩放
 autoplay 是否自动播放
*/
export default function swiper(obj) {
    this.imgArr = obj.imgArr || [] //图片数组
    //图片排序数组
    this.retImgArr = [this.imgArr[this.imgArr.length-1], ...this.imgArr, this.imgArr[0]]
    //动画执行时间
    this.aniTime = obj.aniTime || 1500
    //图片停留时间
    this.intervalTime = obj.intervalTime + this.aniTime || 2500
    //当前索引
    this.nowIndex = 0

    this.swiperListDom = document.getElementsByClassName('swiper-list')[0] //该类名下的第一个子元素

    this.swiperSpotDom //下边原点
    this.leftBtn //左框
    this.rightBtn //右框
    this.mainDom //主界面

    this.moveWidth = this.swiperListDom.offsetWidth //offsetWidth 水平方向 width + 左右padding + 左右border-width
    this.timer = null

    this.prev = Date.now()

    this.autoplay = obj.autoplay
}

swiper.prototype = {
    init() {
        console.log(this.imgArr)
        this.initDom()

        //轮播单张图片li
        let li = '';
        for(let i = 0; i < this.retImgArr.length; i++) {
            li += `<li style="left: ${i*this.moveWidth}px; width: ${this.moveWidth}px" class="swiper-item"><a href="${this.retImgArr[i].url}"><img src="${this.retImgArr[i].imgPath}" alt=""></a></li>`
        }
        this.mainDom.innerHTML = li;

        //小圆点li
        let spotLi = ''
        for(let i = 0;i< this.imgArr.length; i++) {
            if(i === 0) {
                spotLi += `<li class="spot-item" style="background-color: #ff5c1f;" index=${i}</li>`
            } else {
                spotLi += `<li class="spot-item" index="${i}"></li>`
            }
        }
        this.swiperSpotDom.innerHTML = spotLi

        //上一张， 下一张， 小圆点绑定点击事件
        this.eventBind()
    },
    initDom() {
        //轮播图片dom容器

        this.mainDom = document.createElement('ul')
        this.mainDom.className = 'swiper-main'

        this.mainDom.style.width = `${this.moveWidth * (this.imgArr.length+2)}px` //6 * 图片宽度
        this.mainDom.style.left = `${-this.moveWidth}px` //左边距离负一张图片的宽度

        this.swiperListDom.appendChild(this.mainDom)

        //小圆点ul容器
        this.swiperSpotDom = document.createElement('ul')
        this.swiperSpotDom.className = 'swiper-spot'
        this.swiperListDom.appendChild(this.swiperSpotDom)

        //上一张按钮
        this.leftBtn = document.createElement('img')
        this.leftBtn.className = 'leftBtn'
        this.leftBtn.src = left
        this.swiperListDom.appendChild(this.leftBtn)

        //下一张按钮
        this.rightBtn = document.createElement('img')
        this.rightBtn.className = 'rightBtn'
        this.rightBtn.src = right
        if(this.imgArr.length === 1) {
            this.leftBtn.style.display = 'none'
            this.rightBtn.style.display = 'none'
        }
        this.swiperListDom.appendChild(this.rightBtn)
    },
    setActiveSpot() {
      for(let i = 0; i < this.swiperSpotDom.childElementCount; i++) {
          if(i === Math.abs(this.nowIndex)) {
              document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ff5c1f'
          } else {
              document.getElementsByClassName('spot-item')[i].style.backgroundColor = '#ccc'
          }
      }
    },
    eventBind() {
        let that = this
        this.swiperSpotDom.addEventListener('mouseover', function(){
            cleatInterval(that.timer)
        })

        this.swiperSpotDom.addEventListener('click', function(e) {
            e = e||window.event //这一行及下行是为了兼容IE8及以下版本
            var target = e.target || e.srcElement
            if(target.tagName.toLowerCase() === 'li') {
                var ret = this.querySelectorAll('li')
                let index = Array.prototype.indexOf.call(ret, target)
                that.nowIndex = index
                that.setActiveSpot()
                that.mainDom.style.transition = `left .8s`
                that.mainDom.style.left = `${-(that.nowIndex+1) * that.moveWidth}px`
            }
        })
    },

}