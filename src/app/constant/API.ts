import {environment} from '../../environments/environment';

export class API {
  public HOST: string;
  public PORT: number;

  public COLORS?: string;
  public USERS: string;
  public TYPE_PRODUCT: string;
  public PRODUCTS: string;

  constructor() {
    // SERVER ADDRESS
    this.HOST = environment.API;
    this.PORT = environment.PORT;

    // API PATH
    this.COLORS = environment.COLORS;
    this.USERS = environment.USERS;
    this.TYPE_PRODUCT = environment.TYPE_PRODUCTS;
    this.PRODUCTS = environment.PRODUCTS;
  }
}
