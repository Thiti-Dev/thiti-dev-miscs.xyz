import { z } from "zod";
import { t } from "../../../router";
import bcrypt from "bcryptjs";
import type { TProcedureHander } from "../../../interfaces";

const RegisterInputSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
  email: z.string().email(),
});

type TRegisterInput = z.infer<typeof RegisterInputSchema>;

function getProcedureMethod() {
  return t.procedure
    .input(RegisterInputSchema)
    .mutation(async ({ input, ctx }) => {
      const prisma = ctx.prisma.getPrismaClient();

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(input.password, salt);
      const user = await prisma.user
        .create({
          data: { ...input, password: hashedPassword },
        })
        .catch((err) => {
          return err;
        });
      return user;
    });
}

const procedureHandler: TProcedureHander<
  "register",
  ReturnType<typeof getProcedureMethod>
> = () => ({
  name: "register",
  procedure: getProcedureMethod(),
});

export default procedureHandler;
