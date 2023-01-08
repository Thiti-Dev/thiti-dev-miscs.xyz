import type {
  BuildProcedure,
  ProcedureType,
  ProcedureParams,
  AnyRootConfig,
} from "@trpc/server";

export type TProcedureHander<
  N extends string,
  P extends BuildProcedure<
    ProcedureType,
    ProcedureParams<AnyRootConfig, any, any, any, any, any, any>,
    any
  >
> = () => {
  name: N;
  procedure: P;
};
