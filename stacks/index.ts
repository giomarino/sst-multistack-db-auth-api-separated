import * as sst from "@serverless-stack/resources";
import CoreStack from "./core";
import ApiStack from "./api";
import DatabaseStack from "./database";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  const db_stack = new DatabaseStack(app, 'db-stack');

  const api_stack = new ApiStack(app, 'api-stack', db_stack.table);

  const core_stack = new CoreStack(app, 'core-stack');
  
  core_stack.auth.attachPermissionsForAuthUsers([api_stack.api])
}
