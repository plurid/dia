import React from 'react';

import {
    StyledVideo
} from './styled';

import {
    VideoProperties,
} from '../../../data/interfaces';



const Video: React.FC<VideoProperties> = (
    properties,
) => {
    /** properties */
    const {
        source,
    } = properties;


    /** render */
    return (
        <StyledVideo>

        </StyledVideo>
    );
}


export default Video;
