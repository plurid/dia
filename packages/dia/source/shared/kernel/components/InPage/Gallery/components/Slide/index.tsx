import React, {
    useEffect,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledSlide,
} from './styled';



interface SlideProperties {
    items: any[];
    index: number;
    columns: number;
    setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;
    viewContainer: React.MutableRefObject<HTMLDivElement | undefined>;
}

const Slide: React.FC<SlideProperties> = (
    properties,
) => {
    /** properties */
    const {
        items,
        index,
        columns,
        setSelectedSlide,
        viewContainer,
    } = properties;



    /** render */
    return (
        <StyledSlide
            columns={columns}
        >
            {items.map(Item => (
                <Item
                    key={uuid.generate()}
                />
            ))}
        </StyledSlide>
    );
}


export default Slide;
