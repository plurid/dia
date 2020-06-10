import {
    Storage,
    Bucket,
} from '@google-cloud/storage';

import {
    DiaStorageConfiguration,
} from '../../data/interfaces';

import {
    DIA_STORAGE_BUCKET,
} from '../../data/constants';



class DiaStorage {
    private name: string;
    private storage: Storage;
    private bucket: Bucket;

    constructor(
        configuration: DiaStorageConfiguration,
    ) {
        const {
            name,
            credentials,
        } = configuration;

        this.storage = new Storage({
            projectId: credentials.projectID,
            keyFilename: credentials.keyFilename,
        });
        this.name = name || DIA_STORAGE_BUCKET;
        this.bucket = this.storage.bucket(this.name);
    }

    public async upload(
        file: any,
    ) {

    }

    public async download(
        file: string,
    ) {
        return await this.bucket.file(file).download();
    }
}


export default DiaStorage;
