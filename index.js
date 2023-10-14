import { TableData } from "./tableData.js";
import { Tree } from "./tree.js";
import readTableAsync from "./xlsx-reader.js";

const data = await readTableAsync("./table.xlsx");
const tableDataObj = new TableData(data);
const tree = new Tree(tableDataObj);
console.log(tree.getMax());
