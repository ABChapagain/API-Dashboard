import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    // secret
    baseUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
        }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
}

export default NextAuth(authOptions)