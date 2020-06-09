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
            <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/336812660"
                frameBorder={0}
                allowFullScreen={true}
            />
        </StyledVideo>
    );
}


export default Video;
