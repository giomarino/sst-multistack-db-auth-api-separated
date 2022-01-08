import * as sst from "@serverless-stack/resources";

export default class ApiStack extends sst.Stack {
  readonly api: sst.Api;

  constructor(scope: sst.App, id: string, table: sst.Table) {
    super(scope, id);

    this.api = new sst.Api(this, "Api", {
      routes: {
        "GET /": {
          handler: "src/lambda.handler",
          environment: {
            // If you comment the line below it works
            TABLE_NAME: table.dynamodbTable.tableName as string
          }
        }
      }
    });
  }
}
