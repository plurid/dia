import React from 'react';

import {
    StyledSelector,
} from './styled';



interface SelectorProperties {
    selected: boolean;
    atClick: () => void;
}

const Selector: React.FC<SelectorProperties> = (
    properties,
) => {
    /** properties */
    const {
        selected,
        atClick,
    } = properties;


    /** render */
    return (
        <StyledSelector
            selected={selected}
            onClick={() => atClick()}
        >

        </StyledSelector>
    );
}


export default Selector;
