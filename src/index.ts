import * as GraphQL from '@jokio/graphql';
import * as Datastore from '@google-cloud/datastore';

import modules from './modules';
import DbContext from './db';


const {
	DATASTORE_CONFIG: datastoreConfig
} = process.env;


const credentials = datastoreConfig ? JSON.parse(datastoreConfig) : undefined;
const datastore = new Datastore({ credentials });
const db = new DbContext(datastore);


GraphQL.run({
	port: 4001,
	modules,
	contextObject: { db }
});
