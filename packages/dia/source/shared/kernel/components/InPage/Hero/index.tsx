import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    StyledHero,
    StyledHeroImage,
    StyledHeroText,
} from './styled';

import Heading from '../Typography/Heading';

import {
    HeroProperties,
} from '../../../data/interfaces';

import { AppState } from '../../../services/state/store';
import selectors from '../../../services/state/selectors';
// import actions from '../../../services/state/actions';



export interface HeroOwnProperties extends HeroProperties {
}

export interface HeroStateProperties {
    stateIsMobile: boolean;
}

export interface HeroDispatchProperties {
}

export type HeroComponentProperties = HeroOwnProperties
    & HeroStateProperties
    & HeroDispatchProperties;

const Hero: React.FC<HeroComponentProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        heading,
        image,
        Element,
        simple,

        /** state */
        stateIsMobile,
    } = properties;


    /** render */
    return (
        <StyledHero
            simple={simple}
        >
            <StyledHeroText
                simple={simple}
            >
                <Heading
                    text={heading}
                />
            </StyledHeroText>

            <div>
                {image && (
                    <StyledHeroImage>
                        <img
                            src={image.link}
                            alt={image.alt}
                        />
                    </StyledHeroImage>
                )}

                {Element && (
                    <Element />
                )}
            </div>
        </StyledHero>
    );
}


const mapStateToProperties = (
    state: AppState,
): HeroStateProperties => ({
    stateIsMobile: selectors.view.getIsMobile(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): HeroDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Hero);
