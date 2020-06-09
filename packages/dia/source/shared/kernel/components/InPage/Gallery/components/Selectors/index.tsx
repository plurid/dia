import React from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledSelectors,
} from './styled';

import Selector from '../Selector';



interface SelectorsProperties {
    selectedSlide: number;
    setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;
    numberOfSlides: number;
}

const Selectors: React.FC<SelectorsProperties> = (
    properties,
) => {
    /** properties */
    const {
        selectedSlide,
        setSelectedSlide,
        numberOfSlides,
    } = properties;


    /** render */
    const selectors = [];

    for (let i = 0; i < numberOfSlides; i++) {
        selectors.push(
            <Selector
                key={uuid.generate()}
                selected={selectedSlide === i}
                atClick={() => setSelectedSlide(i)}
            />
        )
    }

    return (
        <StyledSelectors>
            {selectors}
        </StyledSelectors>
    );
}


export default Selectors;
