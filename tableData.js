export class TableData {
  constructor(tableValues) {
    this.data = tableValues;
  }

  getLowerPosition() {
    return this.data.slice(1);
  }

  getRightPosition() {
    return this.data.map((row) => row.slice(1));
  }
}
