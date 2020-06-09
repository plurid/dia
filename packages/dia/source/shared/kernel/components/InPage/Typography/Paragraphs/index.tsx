import React from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledParagraphs,
} from './styled';

import Paragraph from '../Paragraph';



interface ParagraphsProperties {
    text: string[];
}

const Paragraphs: React.FC<ParagraphsProperties> = (
    properties,
) => {
    /** properties */
    const {
        text,
    } = properties;


    /** render */
    return (
        <StyledParagraphs>
            <div>
                {text.map(row => {
                    return (
                        <Paragraph
                            key={uuid.generate()}
                            text={row}
                        />
                    );
                })}
            </div>
        </StyledParagraphs>
    );
}


export default Paragraphs;
