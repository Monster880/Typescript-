// 函数声明


const add = function add(x:number,y:number,z:number=10):number{
    if(typeof z === 'number'){
        return x+y+z
    }else{
        return x+y
    }
}

// 注意箭头和es6箭头不一样
const add2: (x:number,y:number,z?:number) => number= add

let result= add(2,3)

let str = 'str'