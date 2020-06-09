import React from 'react';

import {
    StyledPageContainer,
} from './styled';



interface PageContainerProperties {
}

const PageContainer: React.FC<PageContainerProperties> = (
    properties,
) => {
    /** properties */
    const {
        children,
    } = properties;


    /** render */
    return (
        <StyledPageContainer
        >
            {children}
        </StyledPageContainer>
    );
}


export default PageContainer;
