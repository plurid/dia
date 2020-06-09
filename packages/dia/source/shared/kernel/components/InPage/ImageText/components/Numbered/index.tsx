import React from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledNumbered,
    StyledNumberedText,
    StyledNumberedImage,
    StyledNumber,
    StyledNumberContour,
} from './styled';

import Heading from '../../../Typography/Heading';
import Paragraph from '../../../Typography/Paragraph';

import {
    ImageTextNumbered,
} from '../../../../../data/interfaces';



interface NumberedProperties {
    data: ImageTextNumbered;
}

const Numbered: React.FC<NumberedProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        data,
    } = properties;

    const {
        imageLayout,
        heading,
        image,
        number,
        text,
    } = data;


    /** render */
    return (
        <StyledNumbered
            imageLayout={imageLayout}
        >
            <StyledNumberedText>
                <StyledNumber
                >
                    {number}

                    <StyledNumberContour>

                    </StyledNumberContour>
                </StyledNumber>

                <div>
                    <Heading
                        text={heading}
                        kind={'h2'}
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
                </div>
            </StyledNumberedText>

            <StyledNumberedImage>
                <img
                    src={image.link}
                    alt={image.alt}
                />
            </StyledNumberedImage>
        </StyledNumbered>
    );
}


export default Numbered;
