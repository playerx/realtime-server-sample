import * as Datastore from '@google-cloud/datastore';
import { Entity, DbSet, DbContext } from '@jokio/datastore';


export default class extends DbContext {
	Users: DbSet<UserEntity>
	Accounts: DbSet<AccountEntity>

	constructor(datastore: Datastore) {
		super(datastore);

		this.Users = new DbSet<UserEntity>('Users', datastore)
		this.Accounts = new DbSet<AccountEntity>('Accounts', datastore)
	}
}


interface UserEntity extends Entity {
	firstName: string
	lastName: string
}

interface AccountEntity extends Entity {
	currency: string
	amount: number
}
