import { z } from "zod";
import { t } from "../../../router";
import bcrypt from "bcryptjs";
import * as jose from "jose";

const LoginInputSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type TLoginInput = z.infer<typeof LoginInputSchema>;

export default () => ({
  name: "login",
  procedure: t.procedure
    .input(LoginInputSchema)
    .mutation(async ({ input, ctx }) => {
      const prisma = ctx.prisma.getPrismaClient();
      const user = await prisma.user.findFirst({
        where: { username: input.username },
      });

      if (!user || bcrypt.compareSync(input.password, user.password) == false) {
        return {
          message: "Credential not match",
        };
      }

      const { JWT_EXPIRATION_PERIOD, JWT_SECRET } =
        ctx.getEnvironmentVariables();

      var enc = new TextEncoder();
      const token = await new jose.SignJWT({
        username: user.username,
        id: user.id,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(JWT_EXPIRATION_PERIOD)
        .sign(enc.encode(JWT_SECRET));

      return {
        token,
      };
    }),
});
