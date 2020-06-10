import Database from '@plurid/dia-database-google-cloud';



const database = new Database({
    credentials: {
        projectID: '',
        keyFilename: '',
    },
});


export default database;
