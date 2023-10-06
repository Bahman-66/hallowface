import { execSync } from "child_process";
import path from "path";

test("Should display a greeting message", () => {
  const scriptPath = path.join(__dirname, "../../../bin/hallowface.bat hello");
  const output = execSync(scriptPath, { encoding: "utf-8" });
  expect(output).toContain("Hello");
});
