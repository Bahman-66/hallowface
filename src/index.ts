import yargs from "yargs";
import { ReactGen } from "./packages";

const argv = yargs
  .command("hello", "Greet the user", {}, (argv) => {
    console.log("Hello, world!");
  })
  .help().argv;

//ReactGen();
