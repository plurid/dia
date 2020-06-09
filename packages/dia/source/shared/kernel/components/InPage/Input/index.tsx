import React from 'react';

import {
    StyledInput,
} from './styled';

import Dropdown from './components/Dropdown';
import Upload from './components/Upload';



interface InputProperties {
    name: string;
    value: string;
    type: 'text' | 'textarea' | 'password' | 'upload' | 'dropdown';
    helper?: string;
    selectables?: string[];

    atChange: any;
}

const Input: React.FC<InputProperties> = (
    properties,
) => {
    /** properties */
    const {
        name,
        value,
        type,
        helper,
        selectables,
        atChange,
    } = properties;


    /** render */
    const inputField = () => {
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        value={value}
                        onChange={atChange}
                    />
                );
            case 'dropdown':
                return (
                    <Dropdown
                        value={value}
                        selectables={selectables || []}
                        atChange={atChange}
                    />
                );
            case 'upload':
                return (
                    <Upload
                        value={value}
                        atChange={atChange}
                        accept={selectables || []}
                    />
                );
            default:
                return (<input
                    type={type}
                    value={value}
                    onChange={atChange}
                />);
        }
    }

    return (
        <StyledInput
            type={type}
        >
            <div>
                {name}
            </div>

            <div>
                {inputField()}
            </div>

            <div>
                {helper || ''}
            </div>
        </StyledInput>
    );
}


export default Input;
