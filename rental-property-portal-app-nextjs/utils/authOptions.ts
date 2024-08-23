import { Account, AuthOptions, Profile } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/config/database";
import User from "@/models/User";
import { DbEachUser } from "@/types/types";
import { CustomSession } from "@/types/types";
import { Session } from "next-auth";
interface GoogleProfile extends Profile {
  hd?: string; // Hosted domain (specific to Google)
  email_verified?: boolean; // Email verification status
  picture?: string; // Profile picture URL
  given_name?: string;
  family_name?: string;
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
    async signIn({ profile }: { profile?: GoogleProfile | null }) {
      //1. connect to the db
      await connectDB();
      //2.check if user exists

      const isUserExists = await User.findOne({ email: profile?.email });
      //3.if not add user to db
      if (!isUserExists && profile?.email_verified) {
        //Truncate User Name if too long

        await User.create({
          email: profile?.email,
          username: profile?.name,
          image: profile?.picture,
        });
      }
      //4. return true to allow the signin
      return true;
    },

    async session({ session }: { session: Session }): Promise<CustomSession> {
      // 1. Get the user from db
      const user: DbEachUser | null = await User.findOne({
        email: session.user?.email,
      });

      // 2. Assign the uid to session
      if (user) {
        (session as CustomSession).user.id = user._id.toString();
      }

      // 3. Return session
      return session as CustomSession;
    },
  },
};
