interface Person {
    readonly id:number;
    name: string;
    age?:number;
}

// 通过interface限定取值
let viking:Person = {
    id:1234,
    name:'viking',
    age:20,
}
