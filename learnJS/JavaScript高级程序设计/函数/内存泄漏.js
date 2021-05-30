function assignHandler() {
    let element = document.getElementById('btn')
    element.onclick= () => {
        console.log(element.id)
    }
}

function assignHandler_better() {
    let element = document.getElementById('btn')
    let id = element.id
    element.onclick = () => {
        console.log(id)
    }
    element = null //解除对该DOM对象的引用
}