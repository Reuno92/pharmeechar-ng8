import {ListRef} from './listRef';

export class Colors extends ListRef {

  constructor(
    public id: number,
    public name: string,
    public value?: string | number
  ) {
    super(id, name, value);
  }

}
