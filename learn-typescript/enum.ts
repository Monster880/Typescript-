// 只有常量值能用内联
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