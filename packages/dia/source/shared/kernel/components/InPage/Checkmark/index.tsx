import React from 'react';

import {
    StyledCheckmark,
    StyledCheckbox,
    StyledCheck,
} from './styled';



export interface CheckmarkProperties {
    checked: boolean;
    atChange: any;
    text?: string;
    Element?: JSX.Element;
}

const Checkmark: React.FC<CheckmarkProperties> = (
    properties,
) => {
    /** properties */
    const {
        checked,
        atChange,
        text,
        Element,
    } = properties;


    /** render */
    return (
        <StyledCheckmark
        >
            <StyledCheckbox>
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={checked}
                    onChange={atChange}
                />

                <StyledCheck
                    htmlFor="checkbox"
                />
            </StyledCheckbox>

            <div>
                {Element && (
                    <>
                        {Element}
                    </>
                )}
            </div>
        </StyledCheckmark>
    );
}


export default Checkmark;
