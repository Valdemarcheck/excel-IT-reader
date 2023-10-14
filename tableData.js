export class TableData {
  constructor(tableValues) {
    this.data = tableValues;
  }

  getLowerPosition() {
    return new TableData(this.data.slice(1));
  }

  getRightPosition() {
    return new TableData(this.data.map((row) => row.slice(1)));
  }
}
