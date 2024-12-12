const { execSync } = require("child_process");
const readline = require("readline");

(async () => {
  // Run the build command
  execSync("npm run build", { stdio: "inherit" });

  // Prompt the user for the OTP
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const otp = await new Promise((resolve) => {
    rl.question("Enter OTP: ", (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });

  // List of your packages
  const packages = [
    "@minatokens/api",
    "@minatokens/storage",
    "@minatokens/token",
    "@minatokens/upgradable",
    "@minatokens/nft",
    "@minatokens/upgradable-v1",
  ];

  // Run the release command for each package
  packages.forEach((pkg) => {
    execSync(`npm run release -w ${pkg}`, {
      env: { ...process.env, NPM_CONFIG_OTP: otp },
      stdio: "inherit",
    });
  });
})();
