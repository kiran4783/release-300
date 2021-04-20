import React from 'react';
import * as BS from 'react-bootstrap';
function FieldInput(props) {
    if(props.fieldData.inputType !== 'select'){
        return (
            <>
            <BS.Form.Control type={props.fieldData.inputType} defaultValue="" />                
            </>
        )
    } else {
        return (
            <>    
            <BS.DropdownButton variant="info" id="dropdown-basic-button" title={props.fieldData.value}>
            {props.fieldData.options.map((option, index)=>{
                return (
                    <BS.Dropdown.Item key={index + option} href="#/action-1">{option}</BS.Dropdown.Item>    
                );
            })}
                {/* <BS.Dropdown.Item href="#/action-1">Action</BS.Dropdown.Item>
                <BS.Dropdown.Item href="#/action-2">Another action</BS.Dropdown.Item>
                <BS.Dropdown.Item href="#/action-3">Something else</BS.Dropdown.Item> */}
            </BS.DropdownButton>
                
            </>
        )
    }
    
}

export default FieldInput
