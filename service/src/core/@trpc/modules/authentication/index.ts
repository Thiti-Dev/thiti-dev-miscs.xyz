import registerProcedure from "./mutations/register";
import loginProcedure from "./mutations/login";

export class AuthenticationModule {
  static getQueryProcedures() {
    return {};
  }

  static getMutationProcedures() {
    return {
      [registerProcedure().name]: registerProcedure().procedure,
      [loginProcedure().name]: loginProcedure().procedure,
    };
  }
}
