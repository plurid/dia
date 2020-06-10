import Database from '@plurid/dia-database-google-cloud';



const database = new Database({
    credentials: {
        projectID: '',
        keys: '',
    },
});


export default database;
