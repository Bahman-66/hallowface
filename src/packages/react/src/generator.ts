import * as fs from "fs-extra";

export default async function main() {
  const data = await fs.readFile("my-file.txt");
  console.log(data);
}
