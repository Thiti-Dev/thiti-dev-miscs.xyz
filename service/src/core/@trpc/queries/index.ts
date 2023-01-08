import { AuthenticationModule } from "../modules/authentication";

export function getQueryProcedures() {
  return {
    ...AuthenticationModule.getQueryProcedures(),
  };
}
