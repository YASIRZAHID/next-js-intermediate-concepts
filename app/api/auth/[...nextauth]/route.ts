import NextAuth from "next-auth"
import prisma from "@/prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Google from "next-auth/providers/google"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
  providers:[
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret:  process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session: {
    strategy: "jwt"
  }
})

export { handler as GET, handler as POST }