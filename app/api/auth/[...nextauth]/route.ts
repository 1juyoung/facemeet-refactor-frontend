import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { prisma } from '../../../../lib/prisma';

const authOptions = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.name! },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            password: 'kakao_oauth',
            email: user.name!,
            nickname: user.name || '익명',
            state: true,
          },
        });
      }

      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
