let isDone:boolean =false
let age:number = 20

let binarNumber: number =0b1111

let firstName:string = 'viking'
let message: string = `Hello, ${firstName},age is ${age}`


let u:undefined = undefined
let n:null = null 

let num:number = undefined

let notSure:any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

let numberOrString:number | string
numberOrString = 'abc'

let arrOfNumbers: number[] = [1,2,3,4]
arrOfNumbers.push(5)

function test(){
    console.log(arguments)
    let htmlCollection: Node
}

let user: [string,number] = ['viking',20]