import React from 'react';
import * as BS from 'react-bootstrap';
import Section from '../components/Section';

function ManagementIp() {
    const dataModel = [
        {
            title: 'Management IP',
            helpif: '100',
            fields: [
                {
                    label: 'IP Address Mode',
                    inputType: 'select',
                    placeholder: 'Placeholder',
                    value: 'IPv4',
                    options: ['IPv4', 'IPv6', 'Dual'],
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }
            ]
        }, {
            title: 'Management IP',
            helpif: '100',
            fields: [
                {
                    label: 'IP Address Mode',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: 'IPv4',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }
            ]
        }
    ];
    const dataModel2 = [
        {
            title: 'Management IPv4',
            helpif: '100',
            fields: [
                {
                    label: 'Address Mode',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Address',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Netmask',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Gateway',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Primary DNS',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Secondary DNS',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }
            ]
        }, {
            title: 'Management IPv6',
            helpif: '100',
            fields: [
                {
                    label: 'Address Mode',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Address',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Prefix Length',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Gateway',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Primary DNS',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'Secondary DNS',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'IPv6 DAD',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }, {
                    label: 'IPv6 DAD Transmits',
                    inputType: 'text',
                    placeholder: 'Placeholder',
                    value: '',
                    changeHandler: 'changeHandler',
                    clickHandler: 'Click Handler'
                }
                
            ]
        }

    ];
    return (
        <BS.Container fluid>
            <BS.Row>
            {dataModel.map((section, index) => {
                return (
                    <BS.Col key={index}>
                        <Section key={section.title} title={section.title} fields={section.fields}/>
                    </BS.Col>
                )
            })}
            </BS.Row>
            
            <BS.Row>
            {dataModel2.map((section, index) => {
                return (
                    <BS.Col key={section.title + index}>
                        <Section key={section.title} title={section.title} fields={section.fields}/>
                    </BS.Col>
                )
            })}
            </BS.Row>
        </BS.Container>
    )
}

export default ManagementIp
