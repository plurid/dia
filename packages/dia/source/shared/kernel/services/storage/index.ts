import Storage from '@plurid/dia-storage-google-cloud';



const storage = new Storage({
    credentials: {
        projectID: '',
        keys: '',
    },
});


export default storage;
