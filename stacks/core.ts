import * as sst from "@serverless-stack/resources";

export default class CoreStack extends sst.Stack {
  readonly auth: sst.Auth;

  constructor(scope: sst.App, id: string) {
    super(scope, id);

    this.auth = new sst.Auth(this, 'auth', {
      cognito: true
    });
  }
}
