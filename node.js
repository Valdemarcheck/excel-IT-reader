export class Node {
  constructor(value) {
    this.value = value;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  set left(value) {
    this._left = value;
  }

  set right(value) {
    this._right = value;
  }
}
