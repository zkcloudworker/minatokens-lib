const fs = require("fs").promises;
const path = require("path");

async function processDocs() {
  // Get all .md files from docs directory
  const docsDir = path.join(__dirname, "../packages/api/docs/api");
  const files = await fs.readdir(docsDir);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  // First pass: Process globals.md to get the order of files
  const globalsPath = path.join(docsDir, "globals.md");
  let globalsContent = await fs.readFile(globalsPath, "utf8");

  // Create a map of file references to their order
  const orderMap = new Map();
  let currentOrder = 3; // Start from 3 since globals.md is 2

  const linkRegex = /\[.*?\]\((.*?\.md)\)/g;
  let match;
  while ((match = linkRegex.exec(globalsContent)) !== null) {
    orderMap.set(match[1], currentOrder++);
  }

  // Transform links in globals.md
  globalsContent = globalsContent.replace(
    /\[(.*?)\]\((.*?)\.md\)/g,
    (match, text, file) => {
      const newFile = file.toLowerCase().replace(/\./g, "");
      return `[${text}](${newFile})`;
    }
  );

  // Add order to globals.md header
  const newHeader = `---\ntitle: MinaTokens API TypeScript Reference\ncategory: 6749c4dba3a7a4005bae1197\nhidden: false\norder: 2\n---\n\n# @minatokens/api`;
  globalsContent = globalsContent.replace(
    /^\[.*?\]\(.*?\)\n\n\*\*\*\n\n# @minatokens\/api/m,
    newHeader
  );

  await fs.writeFile(globalsPath, globalsContent, "utf8");
  console.log(`Processed: globals.md`);

  // Process other files
  for (const file of mdFiles) {
    if (file === "globals.md") continue;

    const filePath = path.join(docsDir, file);
    let content = await fs.readFile(filePath, "utf8");

    const headerRegex =
      /\[\*\*@minatokens\/api\*\*\]\(README\.md\)\n\n\*\*\*\n\n\[@minatokens\/api\]\(globals\.md\) \/ ([\w.]+)/;
    const match = content.match(headerRegex);

    if (match) {
      const title = match[1];
      const order = orderMap.get(file) || currentOrder++;

      const newHeader = `---\ntitle: ${title}\ncategory: 6749c4dba3a7a4005bae1197\nhidden: false\nslug: ${file.replace(
        /\.md$/,
        ""
      )}\norder: ${order}\n---`;
      content = content.replace(headerRegex, newHeader);

      // Add overviews sections
      const propertiesRegex = /### (\w+)\n\n```ts\n(.*?)\n```/gs;
      const methodsRegex = /### (\w+)\(\)\n\n```ts\n([\s\S]*?)```/g;

      const properties = [];
      const methods = [];
      let propertyMatch;
      let methodMatch;

      // Collect properties
      while ((propertyMatch = propertiesRegex.exec(content)) !== null) {
        const propertyName = propertyMatch[1];
        const propertyType = propertyMatch[2].trim().replace(/^(\w+):/, "");
        properties.push(
          `- ${propertyName}: ${propertyType} [↗](#${propertyName.toLowerCase()})`
        );
      }

      // Collect methods
      while ((methodMatch = methodsRegex.exec(content)) !== null) {
        const methodName = methodMatch[1];
        methods.push(`- ${methodName}() [↗](#${methodName.toLowerCase()})`);
      }

      // Add overviews if they exist
      let overviews = "";
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
        (match, text, file) => {
          const newFile = file.toLowerCase().replace(/\./g, "");
          return `[${text}](${newFile})`;
        }
      );

      await fs.writeFile(filePath, content, "utf8");
      console.log(`Processed: ${file}`);
    } else {
      console.log(`No match found in: ${file}`);
    }
  }
}

processDocs().catch(console.error);
