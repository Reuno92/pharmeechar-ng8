export abstract class ListRef {
  protected constructor(
    public id: number,
    public name: string,
    public value?: string | number
  ) {}
}
