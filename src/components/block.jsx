import React from 'react';


function block(props) {
    return <div className="block">
        <div className="flex-box">
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 1)+"c-"+((props.block - 1) * 3 + 1)} className={"r-" + ((props.row - 1) * 3 + 1) + " c-" + ((props.block - 1) * 3 + 1) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 1)+"c-"+((props.block - 1) * 3 + 2)} className={"r-" + ((props.row - 1) * 3 + 1) + " c-" + ((props.block - 1) * 3 + 2) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 1)+"c-"+((props.block - 1) * 3 + 3)} className={"r-" + ((props.row - 1) * 3 + 1) + " c-" + ((props.block - 1) * 3 + 3) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
        </div>
        <div className="flex-box">
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 2)+"c-"+((props.block - 1) * 3 + 1)} className={"r-" + ((props.row - 1) * 3 + 2) + " c-" + ((props.block - 1) * 3 + 1) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 2)+"c-"+((props.block - 1) * 3 + 2)} className={"r-" + ((props.row - 1) * 3 + 2) + " c-" + ((props.block - 1) * 3 + 2) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 2)+"c-"+((props.block - 1) * 3 + 3)} className={"r-" + ((props.row - 1) * 3 + 2) + " c-" + ((props.block - 1) * 3 + 3) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
        </div>
        <div className="flex-box">
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 3)+"c-"+((props.block - 1) * 3 + 1)} className={"r-" + ((props.row - 1) * 3 + 3) + " c-" + ((props.block - 1) * 3 + 1) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 3)+"c-"+((props.block - 1) * 3 + 2)} className={"r-" + ((props.row - 1) * 3 + 3) + " c-" + ((props.block - 1) * 3 + 2) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
            <p><input type="text" id={"r-"+((props.row - 1) * 3 + 3)+"c-"+((props.block - 1) * 3 + 3)} className={"r-" + ((props.row - 1) * 3 + 3) + " c-" + ((props.block - 1) * 3 + 3) + " b-" + (props.row  * 3 - 3 +Number(props.block))} maxLength="1" onClick={props.inputChange}></input></p>
        </div>
    </div>
}
export default block;