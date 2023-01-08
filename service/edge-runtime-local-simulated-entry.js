import { runServer, EdgeRuntime } from "edge-runtime";
import fs from "fs";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const runtimeScriptAsTxt = fs.readFileSync(
  path.resolve(__dirname, "./dist/index.js"),
  "utf8"
);

const runtimeScriptAsTxtWithProcessEnvSimulated = runtimeScriptAsTxt.replace(
  /"use strict";/,
  `

var process = {
  env: ${JSON.stringify(process.env)}, // populate all the env
};

`
);

const runtime = new EdgeRuntime({
  initialCode: runtimeScriptAsTxtWithProcessEnvSimulated,
});
const server = await runServer({
  runtime,
  port: process.env.EDGE_RUNTIME_PORT || process.env.PORT,
});

console.log(`Listening at ${server.url}`);
