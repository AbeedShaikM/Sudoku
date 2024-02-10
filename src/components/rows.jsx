import React from 'react';
import Block from './block'
function rows(props) {
    return <div className="flex-box1">
        <Block row={props.row} block="1" inputChange={props.inputset} /><Block row={props.row} block="2" inputChange={props.inputset} /><Block row={props.row} block="3" inputChange={props.inputset} />
    </div>
}

export default rows;