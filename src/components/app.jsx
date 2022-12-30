import React from 'react';
// import puzzle from '../puzzle';
// import puzzle from '../puzzle';
// import Puzzle, { array, arr } from '../puzzle';
// import ModeIcon from '@mui/icons-material/Mode';
// import TungstenIcon from '@mui/icons-material/Tungsten';
// import UndoIcon from '@mui/icons-material/Undo'
// import ClearIcon from '@mui/icons-material/Clear';
// import Button from '@mui/material/Button'
import Button from './button';
import Rows from "./rows";
function app() {
    var arr = new Array(9);
    for (let i = 0; i < 9; i++) {
        arr[i] = new Array(9);
    }
    let array = new Array(9);
    for (let i = 0; i < 9; i++) {
        array[i] = new Array(9);
    }
    var block = new Array(9);
    for (let i = 0; i < 9; i++) {
        block[i] = new Array(9);
    }
    let index = new Array(81);
    for (let i = 0; i < 81; i++) {
        index[i] = i;
    }
    function isValid(a, b, c) {
        for (let i = 0; i < c; i++) {
            // block[a]=[];
            if (b === block[a][i])
                return 0;
        }
        return 1;
    }
    function sudoku() {
        populate(0);
        populate(4);
        populate(8);
        fillRemaining(0, 3);
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
    function isUnique(a) {
        let row = Math.floor(a / 9);
        let col = a % 9;
        let flag = 0;
        let c = (Math.floor(row / 3)) * 3 + Math.floor(col / 3);
        let d = (row % 3) * 3 + (col % 3);
        for (let i = 1; i < 10; i++) {
            if (isPresentInBox(i, c) || isPresentInCol(i, col) || isPresentInRow(i, row)) {
                continue;
            }
            else {
                flag++;
            }
        }
        if (flag > 1) return 0;
        else {
            arr[row][col] = 0;
            block[c][d] = 0;
            return 1;
        }
    }
    function swap(a, b) {
        let temp = index[a];
        index[a] = index[b];
        index[b] = temp;
    }
    function puzzle() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                arr[i][j] = 0;
                block[i][j] = 0;
            }
        }
        sudoku();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                array[i][j] = arr[i][j];
            }
        }
        // let rem=new Array(9);
        // for(let i=0;i<9;i++){
        //     rem[i]=new Array(9);
        let canRemove = new Array(81);
        for (let i = 0; i < 81; i++) {
            let r = Math.floor(Math.random() * (81 - i));
            if (isUnique(index[r])) {
                canRemove[index[r]] = 1;
            }
            else {
                canRemove[index[r]] = 0;
            }
            swap(80 - i, r);
        }
        // let f = 0;
        // for (let i = 0; i < 81; i++) {
        //     if (canRemove[i]) f++;
        // }
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
    // Puzzle();
    // for (let i = 0; i < 9; i++) {
    //     console.log(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7], arr[i][8]);
    // }
    // for (let i = 0; i < 9; i++) {
    //     console.log(array[i][0], array[i][1], array[i][2], array[i][3], array[i][4], array[i][5], array[i][6], array[i][7], array[i][8]);
    // }
    var clickedInput = { key: 0 };
    function inputChange(event) {
        clickedInput = event.target;
        // console.log(event);
    }
    // function end() {
    //     var inputs = new Array(81);
    //     // console.log(document.getElementsByTagName("input")[0);
    // }
    // for(let index=0;index<81;index++){
    //     let row=Math.floor(index/9);
    //     let col=index%9;
    //     if(arr[row][col]!==0){
    //         // console.log(inputs[index]);
    //         // console.log(document.getElementById();
    //         // console.log(inputs);
    //         // inputs.value=arr[row][col];
    //     }
    // }
    // document.onkeydown=function(e){
    //     // console.log(e);
    //     // clickedInput.value="";
    //     // clickedInput={key:0};
    //     // if(clickedInput.key==)
    // }
    // document.onclick=function (e){
    //     if(e.target.className==="input"){
    //         console.log("kf;sdr");
    //     }
    //     console.log(e);
    // }
    // document.onclick=function(e){
    //     console.log(e);
    //     let flag=0;
    //     e.path.forEach(element => {
    //         if(element==="div#root"){
    //             flag=1;
    //         }
    //     });
    //     if(flag===0){
    //          clickedInput={key:0};
    //     }
    // }
    let keyB = 0;
    document.onkeydown = function (e) {
        // console.log(e);
        e.preventDefault();
    }
    function buttonClicked(event) {
        keyB = event.target.name;
        handleClick(keyB);
    }
    // const [warnings,setWarnings]=React.useState(0);
    // function getWarnings(a){
    //     a++;
    //     setWarnings(a);
    // }
    let warnings = 0;
    let flag = 0;
    function startTheGame() {
        warnings = 0;
        flag = 0;
        let x = document.getElementsByClassName("warn")[0];
        x.innerHTML = "No.of Wrong Attempts: " + warnings;
        x.classList.remove("text-danger")
        for (let i = 0; i < 81; i++) {
            document.getElementsByTagName("input")[i].value = "";
            document.getElementsByTagName("input")[i].readOnly = false;
        }
        for (let i = 0; i < 9; i++) {
            document.getElementsByClassName("btnx")[i].disabled = false;
        }
        puzzle();
        // for (let i = 0; i < 9; i++) {
        //     console.log(array[i][0], array[i][1], array[i][2], array[i][3], array[i][4], array[i][5], array[i][6], array[i][7], array[i][8]);
        // }
        // for (let i = 0; i < 9; i++) {
        //     console.log(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4], arr[i][5], arr[i][6], arr[i][7], arr[i][8]);
        // }
        let rem = new Array(9);
        for (let i = 0; i < 9; i++) {
            rem[i] = 0;
        }
        // console.log(document.getElementsByTagName("input"));
        let a = document.getElementsByTagName("input");
        for (let index = 0; index < 81; index++) {
            // a[index].showsoftinputonfo
            let row = Math.floor(index / 9);
            let col = index % 9;
            if (arr[row][col] !== 0) {
                let temp1 = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                let temp2 = (row % 3) * 3 + (col % 3);
                // console.log(index,row,col,a);
                a[temp1 * 9 + temp2].value = arr[row][col];
                a[temp1 * 9 + temp2].readOnly = true;
                rem[(arr[row][col]) - 1]++;
                // console.log(rem[(arr[row][col])-1]);
            }
        }
        // console.log(document.getElementsByTagName("span"));
        for (let i = 0; i < 9; i++) {
            // console.log(rem[i]);
            document.getElementsByTagName("span")[i].innerHTML = 9 - rem[i];
            if (rem[i] >= 9) {
                flag++;
                document.getElementsByClassName("btnx")[i].disabled = true;
            }
        }
        if (flag === 9) {
            document.getElementsByClassName("warn")[0].innerHTML = "Congratulations!"
        }
        // let pre = document.getElementById("root");
        // let warn = document.createElement("p");
        // warn.innerHTML = "No.of Wrong attempts:";
        // console.log(warn.classList);
        // warn.className = "warn";
        // // warn.classList.add("text-centre text-warning mb-5")
        // pre.insertBefore(warn, pre.firstChild);
    }
    function handleClick(xy) {
        // console.log(event);
        let key = xy;
        if (clickedInput.key === 0) {
            return 0;
        }
        else if (!((clickedInput.value) < 10 && (clickedInput.value) > 0)) {

            // console.log(clickedInput);
            let row = Number((clickedInput.classList)[0].substring(2, 3));
            // console.log(row);
            let col = Number((clickedInput.classList)[1].substring(2, 3));
            // console.log(col);
            if (Number(key) === array[row - 1][col - 1]) {
                console.log(row, col);
                clickedInput.value = key;
                // console.log(typeof(event.target.name))
                let i = Number(key);
                let j = Number(document.getElementsByTagName("span")[i - 1].innerHTML);
                document.getElementsByTagName("span")[i - 1].innerHTML = j - 1;
                if (j === 1) {
                    flag++;
                    // console.log(i);
                    document.getElementsByClassName("btnx")[i - 1].disabled = true;
                }
                clickedInput.readOnly = true;
                // event.target.name2--;
                // console.log(event.target);
                clickedInput = { key: 0 };
                // isCorrect = 1;
                return 1;
            }
            else {
                warnings++;
                if (warnings <= 5) {
                    document.getElementsByClassName("warn")[0].innerHTML = "No.of Wrong Attempts: " + warnings;
                }
                else {
                    for (let i = 0; i < 81; i++) {
                        document.getElementsByTagName("input")[i].readOnly = true;
                    }
                    let t = document.getElementsByClassName("warn")[0];
                    t.innerHTML = "Exceeded Attempts.You Failed!"
                    t.classList.add("text-danger");
                }
            }
            // let flag = 1;
            // for (let i = 0; i < 81; i++) {
            //     if (document.getElementsByTagName("input")[i].value < 10 && document.getElementsByTagName("input")[i].value > 0) continue;
            //     else {
            //         flag = 0;
            //         break;
            //     }
            // }
            if (flag === 9) {
                document.getElementsByClassName("warn")[0].innerHTML = "Congratulations!"
            }
        }
        else {
            clickedInput = { key: 0 };
            return 0;
        }
    }
    return <div className="mx-auto"><p className="warn">No.of Wrong Attempts: 0</p><div className="mx-auto sudoku"><Rows row="1" inputset={inputChange} /><Rows row="2" inputset={inputChange} /><Rows row="3" inputset={inputChange} /></div>
        <div className="flex-box2 mx-auto">
            <Button num="1" re="9" buttonClick={buttonClicked} /><Button num="2" re="9" buttonClick={buttonClicked} /><Button num="3" re="9" buttonClick={buttonClicked} /><Button num="4" re="9" buttonClick={buttonClicked} /><Button num="5" re="9" buttonClick={buttonClicked} /><Button num="6" re="9" buttonClick={buttonClicked} /><Button num="7" re="9" buttonClick={buttonClicked} /><Button num="8" re="9" buttonClick={buttonClicked} /><Button num="9" re="9" buttonClick={buttonClicked} />
        </div>
        <div className="flex-box2 mx-auto"><button className="mx-auto start-btn" onClick={startTheGame}>Start</button></div></div>
}
export default app;