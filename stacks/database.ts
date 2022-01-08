import * as sst from "@serverless-stack/resources";

export default class DatabaseStack extends sst.Stack {
  readonly table: sst.Table;

  constructor(scope: sst.App, id: string) {
    super(scope, id);

    this.table = new sst.Table(this, 'table', {
      fields: {
        PK: sst.TableFieldType.STRING,
        SK: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: 'PK', sortKey: 'SK' },
    })
  }
}
