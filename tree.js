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
}
