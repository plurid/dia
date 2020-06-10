import React from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledReadmore,
    StyledReadmoreImage,
    StyledReadmoreText,
} from './styled';

import {
    ImageTextReadMore,
} from '../../../../../data/interfaces';

import Heading from '../../../Typography/Heading';
import Paragraph from '../../../Typography/Paragraph';



interface ReadmoreProperties {
    data: ImageTextReadMore;
}

const Readmore: React.FC<ReadmoreProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        data,
    } = properties;

    const {
        imageLayout,
        image,
        heading,
        text,
        readMoreLink,
    } = data;


    /** render */
    return (
        <StyledReadmore
            imageLayout={imageLayout}
        >
            <StyledReadmoreText>
                <Heading
                    text={heading}
                />

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

            </StyledReadmoreText>

            <StyledReadmoreImage>
                <img
                    src={image.link}
                    alt={image.alt}
                />
            </StyledReadmoreImage>
        </StyledReadmore>
    );
}


export default Readmore;
