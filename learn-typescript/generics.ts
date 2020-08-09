function echo<T>(arg:T):T{
    return arg
}

const str1 = echo(true)

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const str2 = swap(['string',123])

function echoWithArr<T>(arg: T[]):T[]{
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1,2,3])

interface IWithLength{
    length:number
}

function echoWithLength<T extends IWithLength>(arg: T): T{
    console.log(arg.length)
    return arg
}

const str3 = echoWithLength('str')
const obj = echoWithLength({length:10,width:10})
const arr2 = echoWithLength([1,2,3])

class Queue {
    private data = [];
    push(item){
        return this.data.push(item)
    }
    pop(){
        return this.data.shift()
    }
}

const queue = new Queue()
queue.push(1)
queue.push('str')
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())
