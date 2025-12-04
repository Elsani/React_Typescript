// let myAdd = function(x:string | number, y:string | number ): number{
//     if(typeof x == 'string'){
//         x = parseInt(x,10);
//     }

//     if(typeof y == 'string') {
//         y = parseInt(y,10);
//     }

//     return x + y;
// }

// console.log(myAdd(5,'5'))

type CardinalDirection = "North" | "East" | "South" | "West";

function move(distance: number, direction: CardinalDirection) {

    console.log('Moviing' +distance+'Miles'+direction);
}
move(5,"North");
