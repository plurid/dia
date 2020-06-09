import React from 'react';



export interface IContext {
    scrollTop: (
        behavior?: 'smooth',
    ) => void;
}

const Context = React.createContext<IContext | null>(null);


export default Context;
