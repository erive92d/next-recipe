
import Recipe from "@/lib/models/Recipe";
import serverUrl from "@/lib/serverUrl";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from "next-auth/providers/github"

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      name: "GitHub",
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials: any, req) {

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/account/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials),
          cache: "no-store"
        })

        const user = await response.json()

        if (response.ok && user) {
          return user
        }
        return null


      },

    })
    ,

  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login"
  },

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    jwt: async ({ token, user }) => {

      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      const userId = token._id
      session.user = token;
      const recipes = await Recipe.find({ users: userId })
      session.recipes = recipes
      return session;
    },
  },
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }