import React, {
    useState,
} from 'react';

import {
    StyledNavigationItem,
    StyledNavigationText,
} from './styled';

import {
    NavigationItem,
} from '../../../../../data/interfaces';



interface NavigationItemProperties {
    data: NavigationItem;
    active: boolean;
}

const NavigationItem: React.FC<NavigationItemProperties> = (
    properties,
) => {
    /** properties */
    const {
        data,
        active,
    } = properties;

    const {
        link,
        text,
    } = data;


    /** state */
    const [
        showText,
        setShowText,
    ] = useState(false);


    /** render */
    return (
        <StyledNavigationItem
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        >
            <a
                href={link}
            >

            </a>

            {showText && (
                <StyledNavigationText
                >
                    {text}
                </StyledNavigationText>
            )}
        </StyledNavigationItem>
    );
}


export default NavigationItem;
