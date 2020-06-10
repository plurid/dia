/**
 * import the `DiaDatabase` from
 *
 * + @plurid/dia-database-aws
 * + @plurid/dia-database-azure
 * + @plurid/dia-database-google-cloud
 * + @plurid/dia-database-mongo
 *
 * create the `diaDatabase` object with the adequate credentials
 * and export it as default.
 */

import DiaDatabase from '@plurid/dia-database-google-cloud';



const diaDatabase = new DiaDatabase({
    credentials: {
        projectID: '',
        keyFilename: '',
    },
});


export default diaDatabase;
