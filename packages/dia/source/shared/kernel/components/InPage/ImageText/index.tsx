import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    StyledImageText,
} from './styled';

import Numbered from './components/Numbered';
import Readmore from './components/Readmore';

import {
    ImageTextProperties,
    ImageTextNumbered,
    ImageTextReadMore,
} from '../../../data/interfaces';

import { AppState } from '../../../services/state/store';
import selectors from '../../../services/state/selectors';
// import actions from '../../../services/state/actions';



export type ImageTextOwnProperties = ImageTextProperties;

export interface ImageTextStateProperties {
    // stateIsMobile: boolean;
}

export interface ImageTextDispatchProperties {
}

export type ImageTextComponentProperties = ImageTextOwnProperties
    & ImageTextStateProperties
    & ImageTextDispatchProperties;

const ImageText: React.FC<ImageTextComponentProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        kind,
        backgrounded,

        // /** state */
        // stateIsMobile,
    } = properties;


    /** render */
    switch (kind) {
        case 'numbered':
            return (
                <StyledImageText
                    backgrounded={backgrounded}
                >
                    <Numbered
                        data={properties as ImageTextNumbered}
                    />
                </StyledImageText>
            );
        case 'readmore':
            return (
                <StyledImageText
                    backgrounded={backgrounded}
                >
                    <Readmore
                        data={properties as ImageTextReadMore}
                    />
                </StyledImageText>
            );
        default:
            return (<></>);
    }
}


const mapStateToProperties = (
    state: AppState,
): ImageTextStateProperties => ({
    // stateIsMobile: selectors.view.getIsMobile(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ImageTextDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(ImageText);
