import { Client } from "basic-ftp";
import { config } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

config({ path: path.join(rootDir, ".env.deploy") });

const { FTP_HOST, FTP_PORT, FTP_USER, FTP_PASSWORD, FTP_REMOTE_DIR } = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD || !FTP_REMOTE_DIR) {
  console.error(
    "Missing FTP credentials. Copy .env.deploy.example to .env.deploy and fill in your details."
  );
  process.exit(1);
}

const outDir = path.join(rootDir, "out");
if (!fs.existsSync(outDir)) {
  console.error('No "out" folder found. Run "npm run build" first.');
  process.exit(1);
}

// Only these top-level entries (whatever the current build actually produces)
// are ever touched on the server. Anything else already in the remote
// directory (mail config, other accounts' files, unrelated folders) is
// left completely alone.
const ownedEntries = fs.readdirSync(outDir);

const client = new Client();
client.ftp.verbose = false;

try {
  console.log(`Connecting to ${FTP_HOST}...`);
  await client.access({
    host: FTP_HOST,
    port: FTP_PORT ? Number(FTP_PORT) : 21,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure: false,
  });

  console.log(`pwd: ${await client.pwd()}`);
  await client.cd(FTP_REMOTE_DIR);
  console.log(`Deploying into: ${await client.pwd()}`);

  const remoteList = await client.list();
  const remoteNames = new Set(remoteList.map((f) => f.name));

  for (const name of ownedEntries) {
    if (remoteNames.has(name)) {
      const remoteEntry = remoteList.find((f) => f.name === name);
      console.log(`Removing existing ${remoteEntry.isDirectory ? "folder" : "file"}: ${name}`);
      if (remoteEntry.isDirectory) {
        await client.removeDir(name);
      } else {
        await client.remove(name);
      }
    }
  }

  console.log("Uploading new build...");
  for (const name of ownedEntries) {
    const localPath = path.join(outDir, name);
    const stat = fs.statSync(localPath);
    if (stat.isDirectory()) {
      await client.uploadFromDir(localPath, name);
    } else {
      await client.uploadFrom(localPath, name);
    }
  }

  console.log("Deploy complete.");
} catch (err) {
  console.error("Deploy failed:", err.message);
  process.exitCode = 1;
} finally {
  client.close();
}
