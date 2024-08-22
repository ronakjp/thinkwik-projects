import { Account, AuthOptions, Profile } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
interface GoogleProfile extends Profile {
  email_verified?: boolean;
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile,}: {profile?: GoogleProfile | null;}) {
          
          //1. connect to the db
          //2.check if user exists
          //3.if not add user to db
          //4. return true to allow the signin


     
      },

      async session({ session }) {
          //1. get the user from db
          //2. Assign the uid to session
          //3.return session    
      }
     
    },
  },
};


