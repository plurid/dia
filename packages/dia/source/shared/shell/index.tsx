import React, {
    useRef,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    PluridComponent,
} from '@plurid/plurid-react';

import {
    useDebouncedCallback,
} from '@plurid/plurid-functions-react';

import {
    GlobalStyle,
} from './styled';

import Head from '../kernel/components/Head';

import Context from './context';

import { AppState } from '../kernel/services/state/store';
import selectors from '../kernel/services/state/selectors';
import actions from '../kernel/services/state/actions';



interface ShellOwnProperties {
}

interface ShellStateProperties {
}

interface ShellDispatchProperties {
    dispatchSetIsMobile: typeof actions.view.setIsMobile;
}

type ShellProperties = ShellOwnProperties
    & ShellStateProperties
    & ShellDispatchProperties;

const Shell: React.FC<ShellProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        children,

        /** dispatch */
        dispatchSetIsMobile
    } = properties;


    /** references */
    const topContainer = useRef<HTMLDivElement>(null);


    /** handlers */
    const scrollTop = (
        behavior?: 'smooth',
    ) => {
        if (topContainer.current) {
            topContainer.current.scrollIntoView({
                behavior,
            });
        }
    }


    /** handlers */
    const setIsMobile = () => {
        if (window.innerWidth < 900) {
            dispatchSetIsMobile(true);
        } else {
            dispatchSetIsMobile(false);
        }
    }

    const handleResize = useDebouncedCallback(setIsMobile, 200);


    /** effects */
    useEffect(() => {
        setIsMobile();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    /** render */
    return (
        <Context.Provider
            value={{
                scrollTop,
            }}
        >
            <GlobalStyle />

            <Head />

            <div
                ref={topContainer}
            />

            <Header />

            {children}

            <Footer />
        </Context.Provider>
    );
}


const mapStateToProperties = (
    state: AppState,
): ShellStateProperties => ({
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ShellDispatchProperties => ({
    dispatchSetIsMobile: (
        isMobile,
    ) => dispatch(
        actions.view.setIsMobile(isMobile),
    ),
});


const ConnectedShell = connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Shell);


const shell: PluridComponent = {
    kind: 'react',
    element: ConnectedShell,
};


export default shell;
