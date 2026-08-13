import { Client } from "basic-ftp";
import { config } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
config({ path: path.join(rootDir, ".env.deploy") });

const { FTP_HOST, FTP_PORT, FTP_USER, FTP_PASSWORD } = process.env;

const client = new Client();
client.ftp.verbose = false;

try {
  await client.access({
    host: FTP_HOST,
    port: FTP_PORT ? Number(FTP_PORT) : 21,
    user: FTP_USER,
    password: FTP_PASSWORD,
    secure: false,
  });
  console.log("pwd after login:", await client.pwd());

  const list = await client.list();
  console.log("\nListing (read-only, no changes made):");
  for (const f of list) {
    console.log(` ${f.isDirectory ? "[DIR]" : "     "} ${f.name}  size=${f.size}  modified=${f.modifiedAt}`);
  }
} catch (err) {
  console.error("Error:", err.message);
} finally {
  client.close();
}
