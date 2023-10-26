import { TableData } from "./tableData.js";
import { DependantTableDataSumsArray } from "./tableDataSumsArray.js";
import readTableAsync from "./xlsx-reader.js";

const data = await readTableAsync("./table.xlsx");

const maxSumsObj = new DependantTableDataSumsArray({
  tableDataArray: data,
  isMin: false,
});
const minSumsObj = new DependantTableDataSumsArray({
  tableDataArray: data,
  isMin: true,
});

const tableDataMaxSumsObj = new TableData(maxSumsObj.data);
const tableDataMinSumsObj = new TableData(minSumsObj.data);

console.log("Max: " + tableDataMaxSumsObj.last);
console.log("Min: " + tableDataMinSumsObj.last);
