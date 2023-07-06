import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    // secret
    secret: process.env.NEXT_PUBLIC_SECRET,
    providers: [
        GoogleProvider({
            clientId: '124405765228-6ds1jk98qgdfe6h63a7id6f98lt97kq2.apps.googleusercontent.com',
            clientSecret: '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'
        }),
        // ...add more providers here
    ],


}

export default NextAuth(authOptions)