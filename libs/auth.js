import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from 'next-auth/providers/credentials';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./mongobdClientPromise";
import usersModel from "@/database/users/users.model";

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
    adapter: MongoDBAdapter(client, { databaseName: process.env.ENVIRONMENT }),
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                if (credentials === null) return null;
                try {
                    if (credentials) {
                        const user = await usersModel.findOne({ email: credentials.email });
                        if (user) {
                            const isMatch = credentials.email === user.email;
                            if (isMatch) {
                                return user;
                            } else {
                                throw new Error("Invalid credentials");
                            }
                        } else {
                            throw new Error("User not found");
                        }
                    } else {
                        throw new Error("Credentials not found");
                    }
                } catch (error) {
                    throw new Error(error);
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ]
})