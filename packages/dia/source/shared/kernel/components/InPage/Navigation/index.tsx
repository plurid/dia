import React, {
    useState,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledNavigation,
    StyledNavigationItems,
} from './styled';

import NavigationItem from './components/NavigationItem';

import {
    NavigationProperties,
} from '../../../data/interfaces';

import { AppState } from '../../../services/state/store';
import selectors from '../../../services/state/selectors';
import actions from '../../../services/state/actions';



export interface NavigationOwnProperties extends NavigationProperties {
}

export interface NavigationStateProperties {
    stateSection: string;
}

export interface NavigationDispatchProperties {
}

export type NavigationComponentProperties = NavigationOwnProperties
    & NavigationStateProperties
    & NavigationDispatchProperties;

const Navigation: React.FC<NavigationComponentProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        items,

        /** state */
        stateSection,
    } = properties;


    /** state */
    const [
        isActive,
        setIsActive,
    ] = useState('');


    /** effects */
    useEffect(() => {
        const handleHashChange = () => {
            setIsActive(window.location.hash);
        }
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        }
    }, [
        setIsActive,
    ]);

    useEffect(() => {
        setIsActive(stateSection);
    }, [
        stateSection,
    ]);


    /** render */
    return (
        <StyledNavigation
        >
            <StyledNavigationItems>
                {items.map(item => {
                    return (
                        <NavigationItem
                            key={uuid.generate()}
                            data={item}
                            active={item.link === isActive}
                        />
                    );
                })}
            </StyledNavigationItems>
        </StyledNavigation>
    );
}


const mapStateToProperties = (
    state: AppState,
): NavigationStateProperties => ({
    stateSection: selectors.view.getSection(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NavigationDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Navigation);
