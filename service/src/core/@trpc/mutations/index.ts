import { AuthenticationModule } from "../modules/authentication";

export function getMutationProcedures() {
  return {
    ...AuthenticationModule.getMutationProcedures(),
  };
}
