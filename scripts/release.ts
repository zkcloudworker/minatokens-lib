import { execSync } from "child_process";
import readline from "readline";

(async () => {
  // Run the build command
  execSync("npm run build", { stdio: "inherit" });

  // Prompt the user for the OTP
  const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const otp: string = await new Promise((resolve) => {
    rl.question("Enter OTP: ", (answer: string) => {
      rl.close();
      resolve(answer.trim());
    });
  });

  // List of your packages
  const packages: string[] = [
    "@minatokens/api",
    "@minatokens/storage",
    "@minatokens/token",
    "@minatokens/upgradable",
    "@minatokens/nft",
    "@minatokens/abi",
  ];

  // Run the release command for each package
  packages.forEach((pkg: string) => {
    execSync(`npm run release -w ${pkg}`, {
      env: { ...process.env, NPM_CONFIG_OTP: otp },
      stdio: "inherit",
    });
  });
})();
