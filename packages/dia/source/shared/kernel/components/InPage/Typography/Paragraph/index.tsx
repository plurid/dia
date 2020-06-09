import React from 'react';

import {
    StyledParagraph,
} from './styled';



interface ParagraphProperties {
    text: string;
}

const Paragraph: React.FC<ParagraphProperties> = (
    properties,
) => {
    /** properties */
    const {
        text,
    } = properties;


    /** render */
    return (
        <StyledParagraph>
            {text}
        </StyledParagraph>
    );
}


export default Paragraph;
