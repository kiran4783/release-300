import React from 'react';
import * as BS from 'react-bootstrap';
import FieldInput from './FieldInput';

function Section(props) {
    return (
        <BS.Card>
            <BS.Card.Header as='h5'>{props.title}</BS.Card.Header>
            <BS.Card.Body>
            {props.fields.map((field, index)=>{
                return (
                    <BS.Form.Group as={BS.Row} controlId="" key={index}>
                        <BS.Form.Label column sm="5">{field.label}</BS.Form.Label>
                        <BS.Col sm="5">
                            <FieldInput key={index + field.label} fieldData={field} />                            
                        </BS.Col>
                    </BS.Form.Group>
                )
            })}
            </BS.Card.Body>
        </BS.Card>
    )
}

export default Section
