console.log('index.js success')

import('./add')
    .then(({default:add}) => {
        console.log(add(1,2))
    })

