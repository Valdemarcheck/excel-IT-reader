import { Node } from "./node.js";

export class Tree {
  constructor(tableData) {
    this.root = this.#buildTree(tableData);
  }

  #buildTree(tableData) {
    if (!tableData.data.length || !tableData.data[0].length) return null;

    const node = new Node(tableData.data[0][0]);
    node.left = this.#buildTree(tableData.getLowerPosition());
    node.right = this.#buildTree(tableData.getRightPosition());

    return node;
  }

  getMax() {
    let accumulator = this.root.value;
    let currentNode = this.root;

    while (currentNode.left && currentNode.right) {
      const left = currentNode.left;
      const right = currentNode.right;

      if (left.value > right.value) {
        currentNode = left;
        accumulator += currentNode.value;
      } else {
        currentNode = right;
        accumulator += currentNode.value;
      }
    }

    return accumulator;
  }

  getMin() {
    let accumulator = this.root.value;
    let currentNode = this.root;

    while (currentNode.left && currentNode.right) {
      const left = currentNode.left;
      const right = currentNode.right;

      if (left.value < right.value) {
        currentNode = left;
        accumulator += currentNode.value;
      } else {
        currentNode = right;
        accumulator += currentNode.value;
      }
    }

    return accumulator;
  }
}
