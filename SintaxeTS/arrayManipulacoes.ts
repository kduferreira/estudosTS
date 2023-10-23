const array: Array<number> = [1, 2, 3, 4, 5,6]


//const buscaNum = array.find(num => num ===4)

//console.log(buscaNum)


array.forEach(num => {
   if(num > 2 && num % 2 ===0){
        console.log(num * 2)
    }
})


array.map(num => {
    if(num < 4 && num % 2 !==0){
        console.log(num * 2)
    }
})

