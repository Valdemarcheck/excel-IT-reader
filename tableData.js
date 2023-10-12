export class TableData {
  constructor(tableValues) {
    this.data = tableValues;
  }

  getLowerPosition() {
    return this.data.slice(1);
  }
}
