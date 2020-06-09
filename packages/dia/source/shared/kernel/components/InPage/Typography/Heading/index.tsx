import React from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledHeading
} from './styled';



interface HeadingProperties {
    text: string[];
    kind?: 'h1' | 'h2';
    link?: string;
}

const Heading: React.FC<HeadingProperties> = (
    properties,
) => {
    /** properties */
    const {
        text,
        kind,
        link,
    } = properties;


    /** render */
    const content = (
        <>
            {text.map((row, index) => {
                return (
                    <span
                        key={uuid.generate()}
                    >
                        {row}

                        {index !== text.length
                        ? (
                            <br />
                        ) : null}
                    </span>
                )
            })}
        </>
    );

    const RenderContent: React.FC<any> = () => {
        switch (kind) {
            case 'h2':
                return (
                    <h2>
                        {content}
                    </h2>
                );
            default:
                return (
                    <h1>
                        {content}
                    </h1>
                );
        }
    }

    return (
        <StyledHeading
            id={link || ''}
        >
            <RenderContent />
        </StyledHeading>
    );
}


export default Heading;
