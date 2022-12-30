var arr=new Array(9);
for(let i=0;i<9;i++){
    arr[i]=new Array(9);
}
let r = Math.floor((Math.random()*9)+1);
let row='1';
let coloumn='2';
arr[row][coloumn] = r;
console.log(arr[row][coloumn]);