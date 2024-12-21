import { execSync } from "child_process";

(async () => {
  // Run the version command
  const version = process.argv[2];
  if (!version) {
    console.error("Please provide a version number");
    process.exit(1);
  }
  execSync(`npm version ${version}`, { stdio: "inherit" });

  // List of your packages
  const packages: string[] = [
    "@minatokens/api",
    "@minatokens/storage",
    "@minatokens/token",
    "@minatokens/upgradable",
    "@minatokens/nft",
    "@minatokens/abi",
  ];

  packages.forEach((pkg: string) => {
    // Update devDependencies and peerDependencies versions
    execSync(
      `npm pkg set "devDependencies.@minatokens/*"="${version}" "peerDependencies.@minatokens/*"="${version}" -w ${pkg}`,
      { stdio: "inherit" }
    );
  });
})();
