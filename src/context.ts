import { Context } from "@jokio/graphql";

import DbContext from "./db";

export interface Context extends Context {
	db: DbContext
}
