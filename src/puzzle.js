var arr = new Array(9);
for (let i = 0; i < 9; i++) {
    arr[i] = new Array(9);
}
let array=new Array(9);
for(let i=0;i<9;i++){
    array[i]=new Array(9);
}
function puzzle(){
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        arr[i][j]=0;
        block[i][j]=0;
    }
}
var block = new Array(9);
for (let i = 0; i < 9; i++) {
    block[i] = new Array(9);
}
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        arr[i][j] = 0;
        block[i][j] = 0;
    }
}
function isValid(a, b, c) {
    for (let i = 0; i < c; i++) {
        // block[a]=[];
        if (b === block[a][i])
            return 0;
    }
    return 1;
}
function populate(a) {
    for (let i = 0; i < 9; i++) {
        let r = Math.floor((Math.random() * 9) + 1);
        // console.log(r);
        if (isValid(a, r, i)) {
            // block[a]=[];
            block[a][i] = r;
            let row = (Math.floor(a / 3)) * 3 + Math.floor(i / 3);
            let coloumn = ((a % 3) * 3 + (i % 3));
            // console.log(row,coloumn)
            // arr[row]=[];
            // arr[row][coloumn]=0;
            arr[row][coloumn] = r;
        }
        else {
            i--;
        }
    }
}
function isPresentInBox(num, box) {
    for (let i = 0; i < 9; i++) {
        // block[box]=[];
        // console.log(box);
        if (block[box][i] === num)
            return 1;
    }
    return 0;
}
function isPresentInRow(num, row) {
    for (let i = 0; i < 9; i++) {
        // arr[row]=[];
        if (arr[row][i] === num)
            return 1;
    }
    return 0;
}
function isPresentInCol(num, col) {
    for (let i = 0; i < 9; i++) {
        // arr[i]=[];
        if (arr[i][col] === num)
            return 1;
    }
    return 0;
}
// i ----->row
// j ----->coloumn
function fillRemaining(i, j) {
    // console.log("1");
    if (j >= 9 && i < 8) {
        i = i + 1;
        j = 0;
    }
    if (i >= 9 && j >= 9) {
        return true;
    }
    if (i < 3) {
        if (j < 3) {
            j = 3;
        }
    }
    else if (i < 6) {
        if (j === (Math.floor(i / 3)) * 3) {
            j += 3;
        }
    }
    else {
        if (j === 6) {
            i += 1;
            j = 0;
            if (i >= 9) {
                return true;
            }
        }
    }
    for (let num = 1; num <= 9; num++) {
        let a = (Math.floor(i / 3)) * 3 + Math.floor(j / 3);
        let b = (j % 3) + (i % 3) * 3;
        if ((!(isPresentInBox(num, a))) && (!(isPresentInCol(num, j)) && (!(isPresentInRow(num, i))))) {
            arr[i][j] = num;
            block[a][b] = num;
            if (fillRemaining(i, j + 1)) {
                return true;
            }
            block[a][b] = 0;
            arr[i][j] = 0;
        }
    }
    return false;
}
function sudoku() {
    populate(0);
    populate(4);
    populate(8);
    fillRemaining(0, 3);
    // for (let i = 0; i < 9; i++)
    // {
    //     for (let j = 0; j < 9; j++)
    //     {
    //         cout << arr[i][j] << " ";
    //     }
    //     cout << "\n";
    // }
}
sudoku();
// for (let i = 0; i < 9; i++) {
//     console.log(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7], arr[i][8]);
// }

for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        array[i][j]=arr[i][j];
    }
}
// let rem=new Array(9);
// for(let i=0;i<9;i++){
//     rem[i]=new Array(9);
let index = new Array(81);
for (let i = 0; i < 81; i++) {
    index[i] = i ;
}
function isUnique(a) {
    let row = Math.floor(a / 9);
    let col = a % 9;
    let flag = 0;
    let c = (Math.floor(row / 3)) * 3 + Math.floor(col / 3);
    let d=(row%3)*3+(col%3);
    for (let i = 1; i < 10; i++) {
        if (isPresentInBox(i, c) || isPresentInCol(i, col) || isPresentInRow(i, row)) {
            continue;
        }
        else {
            flag++;
        }
    }
    if (flag > 1) return 0;
    else{
        arr[row][col]=0;
        block[c][d]=0;
        return 1;
    }
}
function swap(a, b) {
    let temp = index[a];
    index[a] = index[b];
    index[b] = temp;
}
let canRemove = new Array(81);
for (let i = 0; i < 81; i++) {
    let r = Math.floor(Math.random() * (81 - i));
    if (isUnique(index[r])) {
        canRemove[index[r]] = 1;
    }
    else {
        canRemove[index[r]] = 0;
    }
    swap(80 - i,r);
}
let f=0;
for(let i=0;i<81;i++){
    if(canRemove[i]) f++;
}
// let block=new Array(9);
// for(let i=0;i<block.length;i++){
//     block[i]=new Array(9);
// }
// function isValid(a,row,coloumn){
//     // arr[row-1][coloumn-1]=
//     for(let i=0;i<row;i++){
//         if(arr[i][coloumn]===a){
//             return 0;
//         }
//     }
//     for(let i=0;i<coloumn;i++){
//         if(arr[row][i]===a){
//             return 0;
//         }
//     }
//     let b=Math.floor(row/3)*3+Math.floor(coloumn/3);
//     let c=(row%3)*3+(coloumn)%3;
//     for(let i=0;i<c;i++){
//         if(block[b][i]===a){
//             return 0;
//         }
//     }
//     return 1;
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         let rand=Math.floor((Math.random()*9)+1);
//         let b=Math.floor(i/3)*3+Math.floor(j/3);
//         let c=(i%3)*3+(j)%3;
//         if(isValid(rand,i,j)){
//             arr[i][j]=rand;
//             block[b][c]=rand;
//         }
//         else{
//             j--;
//         }
//     }
// }
// console.log(arr[0][0]);
}
// for (let i = 0; i < 9; i++) {
//     console.log(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7], arr[i][8]);
// }
// console.log(f);
// for (let i = 0; i < 9; i++) {
//     console.log(array[i][0], array[i][1], array[i][2], array[i][3], array[i][4], array[i][5], array[i][6], array[i][7], array[i][8]);
// }
// let arr=new Array(9);
// for(let i=0;i<arr.length;i++){
//     arr[i]=new Array(9);
// }
export default puzzle;
export {array,arr};