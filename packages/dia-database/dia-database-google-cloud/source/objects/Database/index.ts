import {
    Firestore,
} from '@google-cloud/firestore';

import {
    DiaDatabaseConfiguration,
    DiaRoute,
    DiaElement,
    DiaApplication,
} from '../../data/interfaces';

import {
    DIA_DATABASE_ROOT,
    DIA_DATABASE_ROUTES,
    DIA_DATABASE_ELEMENTS,
    DIA_DATABASE_META,
    DIA_DATABASE_DATA,
} from '../../data/constants';



class DiaDatabase {
    private name: string;
    private firestore: Firestore;
    private database: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    private routes: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
    private routesData: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    private elements: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;
    private elementsData: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    private meta: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;

    constructor(
        configuration: DiaDatabaseConfiguration,
    ) {
        const {
            name,
            credentials,
        } = configuration;

        this.firestore = new Firestore({
            projectId: credentials.projectID,
            keyFilename: credentials.keyFilename,
        });
        this.name = name || DIA_DATABASE_ROOT;

        this.database = this.firestore.collection(this.name);
        this.routes = this.database.doc(DIA_DATABASE_ROUTES);
        this.routesData = this.routes.collection(DIA_DATABASE_DATA);
        this.elements = this.database.doc(DIA_DATABASE_ELEMENTS);
        this.elementsData = this.elements.collection(DIA_DATABASE_DATA);
        this.meta = this.database.doc(DIA_DATABASE_META);
    }

    public async defineRoute(
        route: DiaRoute,
    ) {
        try {
            await this.routesData.doc().set(route);

            return true;
        } catch (error) {
            return false;
        }
    }

    public async getRoute(
        value: string,
        options?: {
            kind?: string,
        },
    ) {
        try {
            const kind = options?.kind || 'id';

            return this.getValueFromData(
                kind,
                value,
                this.routesData,
            );
        } catch (error) {
            return;
        }
    }

    public async defineElement(
        element: DiaElement,
    ) {
        try {
            await this.elementsData.doc().set(element);

            return true;
        } catch (error) {
            return false;
        }
    }

    public async getElement(
        value: string,
        options?: {
            kind?: string,
        },
    ) {
        try {
            const kind = options?.kind || 'id';
            return this.getValueFromData(
                kind,
                value,
                this.elementsData,
            );
        } catch (error) {
            return;
        }
    }

    public async setApplication(
        application: DiaApplication,
    ) {
        try {
            return;
        } catch (error) {
            return;
        }
    }

    public async updateApplication(
        fields: Record<string, any>
    ) {
        try {
            return;
        } catch (error) {
            return;
        }
    }

    public async getApplication() {
        try {
            const application = (await this.meta.get()).data();

            return application;
        } catch (error) {
            return;
        }
    }


    private async getValueFromData(
        kind: string,
        value: string,
        data: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>,
    ) {
        const query = await data.where(kind, '==', value).get();

        if (query.empty) {
            return;
        }

        const entity = query.docs[0].data();

        return entity;
    }
}


export default DiaDatabase;
