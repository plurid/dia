export interface DiaStorageConfiguration {
    name?: string;
    credentials: DiaDatabaseCredentials;
}

export interface DiaDatabaseCredentials {
    projectID: string;
    keyFilename: string;
}
