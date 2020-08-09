// 只有常量值能用内联，没有const则是双向绑定
const enum Direction {
    Up='UP',
    Down='DOWN',
    Left='LEFT',
    Right='RIGHT',
}

const value = 'UP'
if(value === Direction.Up){
    console.log('go up!')
}