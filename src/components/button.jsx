import React from 'react';

function button(props) {
    // const [rem, setRem] = React.useState(props.re);
    // function getRem() {
    //     setRem(rem - 1);
    // }
    // function multiple(event) {
    //     var valid = props.buttonClick(event);
    //     // console.log(valid);
    //     if (valid) {
    //         getRem();
    //     }
    // }
    return <div className="input-b">
        <button onClick={props.buttonClick} name={props.num} className="btnx">{props.num}</button>
        <span className="rem">9</span>
    </div>
}

export default button;