export class Users {

  constructor(
    public id: number,
    public username: string,
    public password: string,
    public role: string,
    public permission: string,
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public zipcode?: number,
    public city?: string
  ) {}

}
