import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledIndex,
} from './styled';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface IndexOwnProperties {
}

interface IndexStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface IndexDispatchProperties {
}

type IndexProperties = IndexOwnProperties
    & IndexStateProperties
    & IndexDispatchProperties;

const Index: React.FC<IndexProperties> = (
    properties,
) => {
    /** properties */
    // const {
        // /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    // } = properties;


    /** render */
    return (
        <StyledIndex>
            Design and Develop a Dimensional Interface Assembling Data and Elements
        </StyledIndex>
    );
}


const mapStateToProperties = (
    state: AppState,
): IndexStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): IndexDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Index);
