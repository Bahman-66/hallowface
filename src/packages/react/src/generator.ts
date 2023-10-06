import * as fs from "fs-extra";
import { exec } from "child_process";

// Command to execute
const command = "dir";

const isWindows = process.platform === "win32";
if (isWindows) {
  console.log("Running on Windows");
} else {
  console.log("Running on Linux or another platform");
}

export default async function main() {
  // const data = await fs.readFile("../my-file.txt");
  // Execute the command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Command output:\n${stdout}`);
  });
  console.log("Hello World");
}
