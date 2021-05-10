 var a = new Promise((resolve)=>{
     console.log('a')
     resolve('b')
 }).then(
     res =>{
         console.log(res)
         new Promise((resolve)=>{
             resolve('d')
         })
     }
 ).then(
     res => console.log(res)
 )
 setTimeout(()=>{
     console.log('c')

 },0)