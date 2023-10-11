import readXlsxFile from "read-excel-file/node";

export default async function readTableAsync(relativePath) {
  try {
    const data = await readXlsxFile(relativePath);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
