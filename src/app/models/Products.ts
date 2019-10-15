export class Products {
  constructor(
    public id: number,
    public name: string,
    public width: number,
    public height: number,
    public depth: number,
    public weight: number,
    public colorId: Array<number>,
    public typeId: number
  ) {}
}
