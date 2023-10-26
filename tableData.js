export class TableData {
  constructor(tableValues) {
    this.data = tableValues;
  }

  get last() {
    return this.data[this.data.length - 1][this.data[0].length - 1];
  }

  // getLowerPosition() {
  //   return new TableData(this.data.slice(1));
  // }

  // getRightPosition() {
  //   return new TableData(this.data.map((row) => row.slice(1)));
  // }
}
