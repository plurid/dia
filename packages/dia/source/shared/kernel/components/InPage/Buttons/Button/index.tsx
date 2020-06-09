import React from 'react';

import {
    StyledButton,
} from './styled';



interface ButtonProperties {
    text: string;
    atClick: any;
    constrained?: boolean;
}

const Button: React.FC<ButtonProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        text,
        atClick,
        constrained,
    } = properties;

    /** render */
    return (
        <StyledButton
            constrained={constrained ?? true}
        >
            <button
                onClick={(event) => atClick(event)}
            >
                {text}
            </button>
        </StyledButton>
    );
}


export default Button;
