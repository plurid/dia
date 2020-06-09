import {
    PluridRouterPath,
} from '@plurid/plurid-data';

import IndexPage from '../kernel/containers/Index';



const indexPath: PluridRouterPath = {
    value: '/',
    exterior: {
        kind: 'react',
        element: IndexPage,
    },
}


const paths: PluridRouterPath[] = [
    indexPath,
];


export default paths;
