import { db } from "@/app/database";
import getUsersModel from "@/app/models/users";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Usuario" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials) {
                const User = getUsersModel();
                await db.connect();
               const userFound = await User.findOne({user: credentials?.username}) as any
               if(!userFound) throw new Error('Invalid Credentials')

               const isValidPassword = userFound.password === credentials?.password 

               if(!isValidPassword) throw new Error('Invalid Credentials')

                return userFound;
              }
        })
    ],

    callbacks: {
        jwt({user, token}){
            if (user) token.user = user;
            return token;
        },
        session({session, token}){
            session.user = token.user as any
            return session;
        }
    }
  })
  
export { handler as GET, handler as POST }