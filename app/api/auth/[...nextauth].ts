import { AuthOptions } from "@/node_modules/next-auth/index"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials: any) {
                const res = credentials
                console.log(credentials)
            }
        }

        )
    ],
}
