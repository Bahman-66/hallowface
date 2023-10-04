import * as fs from "fs-extra";

async function main() {
  const data = await fs.readFile("my-file.txt");
  console.log(data);
}

main();
