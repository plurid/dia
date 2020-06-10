/**
 * import the `DiaStorage` from
 *
 * + @plurid/dia-storage-aws
 * + @plurid/dia-storage-azure
 * + @plurid/dia-storage-google-cloud
 *
 * create the `diaStorage` object with the adequate credentials
 * and export it as default.
 */

import DiaStorage from '@plurid/dia-storage-google-cloud';



const diaStorage = new DiaStorage({
    credentials: {
        projectID: '',
        keys: '',
    },
});


export default diaStorage;
