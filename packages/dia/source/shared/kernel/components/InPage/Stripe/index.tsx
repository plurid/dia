import React, {
    useEffect,
} from 'react';

import {
    useInView,
} from 'react-intersection-observer';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledStripe,
    StyledHeading,
    StyledStripeImage,
} from './styled';

import Heading from '../Typography/Heading';
import Paragraph from '../Typography/Paragraph';

import {
    StripeProperties,
} from '../../../data/interfaces';

import { AppState } from '../../../services/state/store';
import selectors from '../../../services/state/selectors';
import actions from '../../../services/state/actions';



export interface StripeOwnProperties extends StripeProperties {
}

export interface StripeStateProperties {
    stateIsMobile: boolean;
}

export interface StripeDispatchProperties {
    dispatchSetSection: typeof actions.view.setSection;
}

export type StripeComponentProperties = StripeOwnProperties
    & StripeStateProperties
    & StripeDispatchProperties;

const Stripe: React.FC<StripeComponentProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        heading,
        text,
        Element,
        image,
        backgrounded,
        absolute,
        grid,
        link,

        /** state */
        stateIsMobile,

        /** dispatch */
        dispatchSetSection,
    } = properties;


    /** effects */
    const [stripe, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.6,
        // rootMargin: '100px',
    });


    useEffect(() => {
        if (
            inView
            && link
        ) {
            dispatchSetSection('#' + link);
        }
    }, [
        inView,
    ]);


    /** render */
    return (
        <StyledStripe
            backgrounded={backgrounded}
            absolute={absolute}
            grid={grid}
            ref={stripe}
        >
            <StyledHeading
                absolute={absolute}
                grid={grid}
            >
                <Heading
                    text={heading}
                    link={link}
                />

                {text && text.map(row => {
                    return (
                        <Paragraph
                            key={uuid.generate()}
                            text={row}
                        />
                    );
                })}
            </StyledHeading>


            {image && (
                <StyledStripeImage>
                    <img
                        src={image.link}
                        alt={image.alt}
                    />
                </StyledStripeImage>
            )}

            {Element && (
                <Element />
            )}
        </StyledStripe>
    );
}


const mapStateToProperties = (
    state: AppState,
): StripeStateProperties => ({
    stateIsMobile: selectors.view.getIsMobile(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): StripeDispatchProperties => ({
    dispatchSetSection: (
        section,
    ) => dispatch(
        actions.view.setSection(section),
    ),
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Stripe);
