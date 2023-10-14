export class Node {
  constructor(value) {
    this.value = value;
  }

  set left(value) {
    this._left = value;
  }

  set right(value) {
    this._right = value;
  }
}
