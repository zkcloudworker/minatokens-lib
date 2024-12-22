import { promises as fs } from "fs";
import path from "path";

interface FileMatch {
  [0]: string;
  [1]: string;
  index: number;
  input: string;
  groups?: { [key: string]: string };
}

function formatTitle(title: string): string {
  // Handle special cases for src files
  if (title.endsWith(".src")) {
    return title.replace(".src", "").toUpperCase();
  }
  if (title.endsWith("/src")) {
    return title.replace("/src", "").toUpperCase();
  }
  // Handle special cases for README and modules
  if (title === "README") {
    return "MinaTokens API";
  }
  if (title === "modules") {
    return "Modules";
  }
  return title;
}

async function processDocs(): Promise<void> {
  // Get all .md files from docs directory
  const docsDir: string = path.join(process.cwd(), "./docs");
  const files: string[] = await fs.readdir(docsDir);
  const mdFiles: string[] = files.filter((file: string) =>
    file.endsWith(".md")
  );

  // First pass: Process all src.*.md files
  const srcFiles = [
    "README.md",
    "modules.md",
    ...mdFiles.filter((file) => file.match(/^.+\.src\.md$/)),
  ];
  console.log(srcFiles);

  const orderMap: Map<string, number> = new Map();
  let currentOrder: number = 1;

  // Pre-assign orders based on srcFiles array position
  srcFiles.forEach((file) => {
    orderMap.set(file, currentOrder++);
  });

  for (const srcFile of srcFiles) {
    const srcPath: string = path.join(docsDir, srcFile);
    let srcContent: string = await fs.readFile(srcPath, "utf8");

    // Special handling for modules.md file
    if (srcFile === "modules.md") {
      // Transform module links to use three-letter abbreviations
      srcContent = srcContent.replace(
        /- \[(.*?)\/src\]\((.*?)\)/g,
        (match: string, module: string): string => {
          const moduleMap: { [key: string]: string } = {
            abi: "ABI",
            api: "API",
            nft: "NFT",
            storage: "STORAGE",
            token: "TOKEN",
            upgradable: "UPGRADABLE",
          };
          const upperModule = moduleMap[module] || module.toUpperCase();
          return `- [${upperModule}](${module}src)`;
        }
      );
    }

    // Scan for additional files in links that aren't in srcFiles
    const linkRegex: RegExp = /\[.*?\]\((.*?\.md)\)/g;
    let match: RegExpExecArray | null;
    while ((match = linkRegex.exec(srcContent)) !== null) {
      if (!orderMap.has(match[1])) {
        orderMap.set(match[1], currentOrder++);
      }
    }

    // Transform links in src file
    srcContent = srcContent.replace(
      /\[(.*?)\]\((.*?)\.md\)/g,
      (match: string, text: string, file: string): string => {
        const newFile: string = file.toLowerCase().replace(/\./g, "");
        return `[${text}](${newFile})`;
      }
    );

    // Add order to src file header - special handling for README and modules
    const rawTitle = srcFile.replace(/\.md$/, "");
    const formattedTitle = formatTitle(rawTitle);
    const newHeader: string = `---\ntitle: ${formattedTitle}\ncategory: 6749c4dba3a7a4005bae1197\nhidden: false\norder: ${
      orderMap.get(srcFile) || currentOrder++
    }\n---\n\n`;

    if (srcFile === "README.md") {
      // Replace everything before the first heading
      srcContent = srcContent.replace(
        /^[\s\S]*?(?=# MinaTokens API)/,
        newHeader
      );
    } else if (srcFile === "modules.md") {
      // Replace everything before the first heading
      srcContent = srcContent.replace(
        /^[\s\S]*?(?=# minatokens-lib)/,
        newHeader
      );
    } else {
      // Original replacement for other files
      srcContent = srcContent.replace(
        /^\[.*?\]\(.*?\)\n\n\*\*\*\n\n\[.*?\]\(.*?\) \/ .*/m,
        newHeader
      );
      // Replace */src titles with just the module name in uppercase
    }
    console.log(rawTitle, formattedTitle);
    const searchString = formattedTitle.toLowerCase() + "/src";
    srcContent = srcContent.replace(searchString, formatTitle(searchString));

    await fs.writeFile(srcPath, srcContent, "utf8");
  }

  let processedFiles: number = 0;
  let skippedFiles: number = 0;
  // Process other files
  for (const file of mdFiles) {
    if (srcFiles.includes(file)) continue;

    const filePath: string = path.join(docsDir, file);
    let content: string = await fs.readFile(filePath, "utf8");

    const headerRegex =
      /^\[.*?\]\(.*?\)\n\n\*\*\*\n\n\[.*?\]\(.*?\) \/ ([\w.\/]+)/m;
    const match: RegExpMatchArray | null = content.match(headerRegex);

    if (match) {
      const rawTitle: string = match[1];
      const formattedTitle: string = formatTitle(rawTitle);
      const order: number = orderMap.get(file) || currentOrder++;

      const newHeader: string = `---\ntitle: ${formattedTitle}\ncategory: 6749c4dba3a7a4005bae1197\nhidden: false\nslug: ${file.replace(
        /\.md$/,
        ""
      )}\norder: ${order}\n---`;
      content = content.replace(headerRegex, newHeader);

      // Add overviews sections
      const propertiesRegex: RegExp = /### (\w+)\n\n```ts\n(.*?)\n```/gs;
      const methodsRegex: RegExp = /### (\w+)\(\)\n\n```ts\n([\s\S]*?)```/g;

      const properties: string[] = [];
      const methods: string[] = [];
      let propertyMatch: RegExpExecArray | null;
      let methodMatch: RegExpExecArray | null;

      // Collect properties
      while ((propertyMatch = propertiesRegex.exec(content)) !== null) {
        const propertyName: string = propertyMatch[1];
        const propertyType: string = propertyMatch[2]
          .trim()
          .replace(/^(\w+):/, "");
        properties.push(
          `- ${propertyName}: ${propertyType} [↗](#${propertyName.toLowerCase()})`
        );
      }

      // Collect methods
      while ((methodMatch = methodsRegex.exec(content)) !== null) {
        const methodName: string = methodMatch[1];
        methods.push(`- ${methodName}() [↗](#${methodName.toLowerCase()})`);
      }

      // Add overviews if they exist
      let overviews: string = "";
      if (properties.length > 0) {
        overviews += `\n## Properties overview\n\n${properties.join("\n")}\n`;
      }
      if (methods.length > 0) {
        overviews += `\n## Methods overview\n\n${methods.join("\n")}\n`;
      }

      if (overviews) {
        content = content.replace(/# .*?\n/, `$&${overviews}`);
      }

      // Transform all links in the file
      content = content.replace(
        /\[(.*?)\]\((.*?)\.md\)/g,
        (match: string, text: string, file: string): string => {
          const newFile: string = file.toLowerCase().replace(/\./g, "");
          return `[${text}](${newFile})`;
        }
      );

      await fs.writeFile(filePath, content, "utf8");
      //console.log(`Processed: ${file}`);
      processedFiles++;
    } else {
      console.log(`No match found in: ${file}`);
      skippedFiles++;
    }
  }

  console.log(
    `Processed ${processedFiles} files, skipped ${skippedFiles} files`
  );
}

processDocs().catch(console.error);
