import { Resolvers } from "@jokio/graphql";
import { Context } from '../context';

export const typeDefs = `
	extend type Query {
		users: [User]
	}

	extend type Mutation {
		addUser(firstName: String, lastName: String): User
	}

	type User {
		id: ID!
		firstName: String
		lastName: String
	}
`;


export const resolvers: Resolvers<Context> = {
	Query: {
		users: (_, __, { db }) => db.Users.query(),
	},

	Mutation: {
		addUser: (_, props, { db }) => db.Users.save(props)
	}
}
