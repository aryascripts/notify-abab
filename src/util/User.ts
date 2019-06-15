export class User {
  name: string;
  signedIn: boolean;

  constructor(name: string, signedIn: boolean) {
    this.name = name;
    this.signedIn = signedIn;
  }

}
